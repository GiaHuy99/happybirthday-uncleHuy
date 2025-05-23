import { useState, useEffect } from "react";

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (typeof window !== "undefined") {
				setScrolled(window.scrollY > 50);
			}
		};

		if (typeof window !== "undefined") {
			window.addEventListener("scroll", handleScroll);
			return () => window.removeEventListener("scroll", handleScroll);
		}
	}, []);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	const navLinks = [
		{ name: "Inicio", href: "#hero" },
		// { name: "Nosotros", href: "#about" },
		{ name: "Galería", href: "#gallery" },
		{ name: "Detalles", href: "#details" },
		{ name: "Agenda", href: "#timeline" },
		{ name: "Confirmar asistencia", href: "#rsvp" },
	];

	return (
		<nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex-shrink-0">
						<a href="#hero" className="text-purple-dark font-script text-2xl">
							Salomé
						</a>
					</div>

					{/* desktop */}
					<div className="hidden md:block">
						<div className="ml-10 flex items-center space-x-8">
							{navLinks.map((link) => (
								<a
									key={link.name}
									href={link.href}
									className={`${
										scrolled ? "text-purple-dark" : "text-white"
									} hover:text-purple-dark px-3 py-2 text-sm font-medium transition-colors duration-200`}
								>
									{link.name}
								</a>
							))}
						</div>
					</div>

					<div className="md:hidden">
						<button
							className="text-gray-600 hover:text-purple-dark"
							onClick={toggleMobileMenu}
						>
							{mobileMenuOpen ? (
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke={scrolled ? "text-purple-dark" : "white"}
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="lucide lucide-x-icon lucide-x"
								>
									<path d="M18 6 6 18" />
									<path d="m6 6 12 12" />
								</svg>
							) : (
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke={scrolled ? "text-purple-dark" : "white"}
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="lucide lucide-menu-icon lucide-menu"
								>
									<path d="M4 12h16" />
									<path d="M4 18h16" />
									<path d="M4 6h16" />
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>

			{/* mobile */}
			<div
				className={`md:hidden bg-white/95 backdrop-blur-sm shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
					mobileMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
				}`}
			>
				<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
					{navLinks.map((link) => (
						<a
							key={link.name}
							href={link.href}
							className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-purple-dark"
							onClick={() => setMobileMenuOpen(false)}
						>
							{link.name}
						</a>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
