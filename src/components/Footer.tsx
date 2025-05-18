const Footer = () => {
	return (
		<footer className="bg-purple-lighter py-12">
			<div className="max-w-7xl mx-auto px-4">
				<div className="text-center">
					<h2 className="font-script text-4xl mb-4 text-purple-dark">
						Salomé XV
					</h2>
					<p className="mb-8">Gracias por ser parte de este día tan especial</p>

					<div className="flex justify-center space-x-6 mb-8 text-purple-dark">
						<a
							href="#hero"
							className="hover:text-purple-dark transition-colors"
						>
							Inicio
						</a>
						<a
							href="#about"
							className="hover:text-purple-dark transition-colors"
						>
							Acerca de
						</a>
						<a
							href="#gallery"
							className="hover:text-purple-dark transition-colors"
						>
							Galería
						</a>
						<a
							href="#details"
							className="hover:text-purple-dark transition-colors"
						>
							Detalles del evento
						</a>
						<a
							href="#timeline"
							className="hover:text-purple-dark transition-colors"
						>
							Agenda de la noche
						</a>
						<a
							href="#rsvp"
							className="hover:text-purple-dark transition-colors"
						>
							Confirmación
						</a>
					</div>

					<div className="flex items-center justify-center gap-2">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="text-purple-dark lucide lucide-heart-icon lucide-heart"
						>
							<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
						</svg>
						<p>22 junio, 2025 • Conjunto residencial oro</p>
					</div>

					<p className="mt-8 text-[11px] text-black">
						Sitio web desarrollado por{" "}
						<a
							href="https://www.linkedin.com/in/mateobetancurb/"
							className="cursor-pointer hover:underline"
						>
							Mateo Betancur
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
