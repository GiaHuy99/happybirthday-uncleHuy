import useScrollAnimation from "../hooks/useScrollAnimation";

const EventDetails = () => {
	const animateFadeUp = useScrollAnimation("animate-fade-in-up");
	const animateFadeRight200 = useScrollAnimation("animate-fade-in-right", {
		delay: 200,
	});
	const animateFadeLeft300 = useScrollAnimation("animate-fade-in-left", {
		delay: 300,
	});

	return (
		<section id="details" className="section bg-white">
			<h2 ref={animateFadeUp} className="section-title scroll-animate ">
				Nos vemos aquí
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
				<div
					ref={animateFadeRight200}
					className="rounded-lg overflow-hidden shadow-lg scroll-animate"
				>
					<img
						src="https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt="Venue"
						className="w-full h-64 object-cover"
						loading="lazy"
					/>
					<div className="bg-white p-6">
						<h3 className="font-display text-2xl text-purple-dark mb-4">
							Laion Eventos
						</h3>
						<p className="mb-4">
							Haz clic abajo para conocer las indicaciones sobre cómo llegar
						</p>
						<div className="flex items-start space-x-2">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="text-purple-dark mt-1 flex-shrink-0"
							>
								<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
								<circle cx="12" cy="10" r="3" />
							</svg>
							<a
								href="https://www.google.com/maps/search/?api=1&query=Calle+32F+%23+75C+-+145"
								target="_blank"
								rel="noopener noreferrer"
								className="text-purple-dark hover:underline"
							>
								Calle 32F # 75C - 145
							</a>
						</div>
					</div>
				</div>

				<div ref={animateFadeLeft300} className="scroll-animate">
					<div className="bg-white p-6 rounded-lg shadow-lg mb-6 hover-lift">
						<div className="flex items-center space-x-4 mb-4">
							<div className="bg-purple-lighter p-3 rounded-full">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="text-purple-dark mt-1 flex-shrink-0"
								>
									<path d="M8 2v4" />
									<path d="M16 2v4" />
									<rect width="18" height="18" x="3" y="4" rx="2" />
									<path d="M3 10h18" />
								</svg>
							</div>
							<div>
								<h3 className="font-display text-xl text-gray-800">Fecha</h3>
								<p className="text-gray-600">Domingo, 22 de junio, 2025</p>
							</div>
						</div>
					</div>

					<div className="bg-white p-6 rounded-lg shadow-lg mb-6 hover-lift">
						<div className="flex items-center space-x-4 mb-4">
							<div className="bg-purple-lighter p-3 rounded-full">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="text-purple-dark mt-1 flex-shrink-0"
								>
									<circle cx="12" cy="12" r="10" />
									<polyline points="12 6 12 12 16 14" />
								</svg>
							</div>
							<div>
								<h3 className="font-display text-xl text-gray-800">Hora</h3>
								<p className="text-gray-600">7:30 PM</p>
							</div>
						</div>
					</div>

					<div className="bg-white p-6 rounded-lg shadow-lg hover-lift">
						<div className="flex items-center space-x-4 mb-4">
							<div className="bg-purple-lighter p-3 rounded-full">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="text-purple-dark mt-1 flex-shrink-0"
								>
									<rect x="3" y="8" width="18" height="4" rx="1" />
									<path d="M12 8v13" />
									<path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
									<path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
								</svg>
							</div>
							<div>
								<h3 className="font-display text-xl text-gray-800">
									Código de vestimenta
								</h3>
								<p className="text-gray-600">Formal</p>
							</div>
						</div>
						<p className="text-gray-600 pt-2 border-t border-gray-100">
							Hombres: Camisa con corbata, pantalones de vestir, chaqueta
							opcional
							<br />
							Mujeres: Vestidos de cocktail en tonos pasteles o joyas
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EventDetails;
