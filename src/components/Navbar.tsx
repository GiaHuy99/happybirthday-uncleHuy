import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";

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
		{ name: "Home", href: "#hero" },
		{ name: "About", href: "#about" },
		{ name: "Gallery", href: "#gallery" },
		{ name: "Event Details", href: "#details" },
		{ name: "Timeline", href: "#timeline" },
		{ name: "RSVP", href: "#rsvp" },
	];

	return (
		<nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex-shrink-0">
						<a href="#hero" className="text-rose-600 font-script text-2xl">
							Isabella's XV
						</a>
					</div>

					<div className="hidden md:block">
						<div className="ml-10 flex items-center space-x-8">
							{navLinks.map((link) => (
								<a
									key={link.name}
									href={link.href}
									className="text-gray-600 hover:text-rose-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
								>
									{link.name}
								</a>
							))}
						</div>
					</div>

					<div className="md:hidden">
						<button
							className="text-gray-600 hover:text-rose-500"
							onClick={toggleMobileMenu}
						>
							{mobileMenuOpen
								? // <X className=\"h-6 w-6\" />
								  "Close"
								: // <Menu className=\"h-6 w-6\" />
								  "Menu"}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			{/* {mobileMenuOpen && ( */}
			{/*   <div className=\"md:hidden bg-white/95 backdrop-blur-sm shadow-lg\"> */}
			{/*     <div className=\"px-2 pt-2 pb-3 space-y-1 sm:px-3\"> */}
			{/*       {navLinks.map((link) => ( */}
			{/*         <a */}
			{/*           key={link.name} */}
			{/*           href={link.href} */}
			{/*           className=\"block px-3 py-2 text-base font-medium text-gray-600 hover:text-rose-500\" */}
			{/*           onClick={() => setMobileMenuOpen(false)} */}
			{/*         > */}
			{/*           {link.name} */}
			{/*         </a> */}
			{/*       ))} */}
			{/*     </div> */}
			{/*   </div> */}
			{/* )} */}
		</nav>
	);
};

export default Navbar;
