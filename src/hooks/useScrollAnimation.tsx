import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
	threshold?: number;
	triggerOnce?: boolean;
	delay?: number;
}

const useScrollAnimation = (
	animationClass: string,
	options?: UseScrollAnimationOptions
) => {
	const { threshold = 0.1, triggerOnce = true, delay = 0 } = options || {};
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const currentRef = ref.current;
		if (!currentRef) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setTimeout(() => {
							setIsVisible(true);
							if (triggerOnce) {
								observer.unobserve(entry.target);
							}
						}, delay);
					} else {
						if (!triggerOnce) {
							setIsVisible(false);
						}
					}
				});
			},
			{ threshold }
		);

		observer.observe(currentRef);

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, [animationClass, threshold, triggerOnce, delay]);

	useEffect(() => {
		if (isVisible && ref.current) {
			ref.current.classList.add(animationClass);
			ref.current.classList.add("scroll-animate");
			void ref.current.offsetWidth;
			ref.current.classList.remove("scroll-animate");
		} else if (!isVisible && ref.current && !triggerOnce) {
			ref.current.classList.remove(animationClass);
		}
	}, [isVisible, animationClass, triggerOnce]);

	const setRef = (element: HTMLElement | null) => {
		ref.current = element;
	};

	return setRef;
};

export default useScrollAnimation;
