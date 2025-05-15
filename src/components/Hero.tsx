import { useEffect, useState } from "react";
import Countdown from "./Countdown";

const Hero = () => {
	const [offset, setOffset] = useState(0);

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
			style={{
				backgroundImage:
					"url('https://images.pexels.com/photos/6393360/pexels-photo-6393360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundAttachment: "fixed",
			}}
		>
			<div
				className="absolute inset-0 bg-black/40"
				style={{
					transform: `translateY(${offset * 0.3}px)`,
				}}
			></div>

			<div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
				<div data-aos="fade-up" data-aos-delay="100">
					<p className="font-script text-2xl md:text-3xl lg:text-4xl text-rose-200 mb-2">
						Te invito a celebrar conmigo
					</p>
				</div>

				<div data-aos="fade-up" data-aos-delay="300">
					<h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-white mb-4">
						Salomé{" "}
						<span className="text-gradient bg-gradient-to-r from-rose-300 to-gold-300">
							Quinceañera
						</span>
					</h1>
				</div>

				<div data-aos="fade-up" data-aos-delay="500">
					<p className="text-white text-xl md:text-2xl mb-8 font-light">
						Junio 21, 2025 <span className="mx-2">•</span> Conjunto residencial
						oro
					</p>
				</div>

				<div data-aos="fade-up" data-aos-delay="700">
					<Countdown targetDate="2025-06-15T18:00:00" />
				</div>

				<div data-aos="fade-up" data-aos-delay="900" className="mt-12">
					<a href="#rsvp" className="btn btn-primary group">
						Confirmar asistencia
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-heart-icon lucide-heart inline-block ml-2 h-4 w-4 transition-transform group-hover:scale-125"
						>
							<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
						</svg>
					</a>
				</div>
			</div>

			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
				<a href="#about" className="flex flex-col items-center">
					<span className="text-sm mb-2">Desplazar hacia abajo</span>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						/>
					</svg>
				</a>
			</div>
		</section>
	);
};

export default Hero;
