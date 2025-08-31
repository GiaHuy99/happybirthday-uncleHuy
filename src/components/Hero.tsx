import { useEffect, useState } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Hero = () => {
	const [offset, setOffset] = useState(0);
	const animateFadeUp100 = useScrollAnimation("animate-fade-in-up", {
		delay: 100,
	});
	const animateFadeUp300 = useScrollAnimation("animate-fade-in-up", {
		delay: 300,
	});
	const animateFadeUp500 = useScrollAnimation("animate-fade-in-up", {
		delay: 500,
	});


	// parallax effect on scroll
	useEffect(() => {
		const handleScroll = () => {
			setOffset(window.pageYOffset);
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<section
			id="hero"
			className="relative min-h-screen flex items-center justify-center overflow-hidden"
		>
			<div
				className="absolute inset-0 z-0"
				style={{
					backgroundImage: `url(/03.webp)`,
					backgroundSize: "cover",
					backgroundPosition: "center 10%",
					backgroundAttachment: "fixed",
					transform: `translateY(${offset * 0.1}px)`,
				}}
			></div>

			<div className="absolute inset-0 bg-black/40 z-0"></div>

			<div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
				<div ref={animateFadeUp100} className="scroll-animate">
					<p className="font-script text-2xl md:text-3xl lg:text-4xl text-purple-dark mb-2">
						Happy birthday
					</p>
				</div>

				<div ref={animateFadeUp300} className="scroll-animate">
					<h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-white mb-4">
						Cậu Huy
					</h1>
				</div>

				<div ref={animateFadeUp500} className="scroll-animate">
					<p className="text-white text-xl md:text-2xl mb-8 font-light">
						August 31 <span className="mx-2">•</span> Huy Dương
					</p>
				</div>



			</div>

		</section>
	);
};

export default Hero;
