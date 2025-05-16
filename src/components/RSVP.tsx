const RSVP = () => {
	return (
		<section id="rsvp" className="section">
			<h2 className="section-title" data-aos="fade-up">
				Confirmación de asistencia
			</h2>

			<div className="max-w-4xl mx-auto">
				<p
					className="text-center text-gray-600 mb-10"
					data-aos="fade-up"
					data-aos-delay="200"
				>
					Por favor haznos saber si asistirás a la fiesta de Salo
					<br />
					<span className="text-rose-500">
						Debes confirmar tu asistencia antes del 15 de junio de 2025
					</span>
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div
						className="bg-white p-8 rounded-lg shadow-lg"
						data-aos="fade-right"
						data-aos-delay="300"
					>
						<div className="text-center py-4">
							<div className="mx-auto w-16 h-16 mb-4">
								<svg
									width="40"
									height="40"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="text-rose-500 lucide lucide-book-text-icon lucide-book-text"
								>
									<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
									<path d="M8 11h8" />
									<path d="M8 7h6" />
								</svg>
							</div>
							<p className="text-gray-600 mb-6">
								Haz clic en el botón de abajo para acceder al formulario y
								confirmar tu asistencia
							</p>
							<a
								href="https://forms.gle/your-google-form-url"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md"
							>
								Clic aquí
							</a>
						</div>
					</div>

					<div data-aos="fade-left" data-aos-delay="400">
						<div className="bg-white p-8 rounded-lg shadow-lg mb-8">
							<h3 className="font-display text-2xl text-rose-600 mb-4">
								Contacto
							</h3>
							<p className="mb-6">
								Para cualquier pregunta o disposición especial, por favor
								contacta a los padres de Salo:
							</p>
							<div className="space-y-3">
								<p>
									<span className="font-medium">Correo:</span>
									<a
										href="mailto:isabellas.xv@example.com"
										className="text-rose-500 ml-2"
									>
										salo.xv@example.com
									</a>
								</p>
								<p>
									<span className="font-medium">Teléfono:</span>
									<a href="tel:+15551234567" className="text-rose-500 ml-2">
										(555) 123-4567
									</a>
								</p>
							</div>
						</div>

						<div className="bg-white p-8 rounded-lg shadow-lg">
							<h3 className="font-display text-2xl text-rose-600 mb-4">
								Regalo
							</h3>
							<div className="flex items-center gap-2">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									className="text-rose-500 lucide lucide-heart-icon lucide-heart"
								>
									<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
								</svg>
								<p>LLuvia de sobres</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default RSVP;
