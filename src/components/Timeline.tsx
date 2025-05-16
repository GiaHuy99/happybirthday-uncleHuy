import { timelineEvents } from "../data/timelineEvents";

const Timeline = () => {
	return (
		<section
			id="timeline"
			className="section bg-rose-50 relative overflow-hidden"
		>
			<h2 className="section-title" data-aos="fade-up">
				Cronograma del Evento
			</h2>

			<div className="max-w-4xl mx-auto">
				<p
					className="text-center text-gray-600 mb-12"
					data-aos="fade-up"
					data-aos-delay="200"
				>
					Un horario de la celebración para ayudarte a planificar tu noche.
				</p>

				<div className="timeline-container">
					{timelineEvents.map((event, index) => (
						<div
							key={event.id}
							className="timeline-item"
							data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
							data-aos-delay={200 + index * 100}
						>
							<div className="timeline-item-dot"></div>
							<div className="timeline-item-content">
								<h3 className="font-display text-xl text-rose-700">
									{event.title}
								</h3>
								<span className="text-sm font-medium text-rose-500 block mb-2">
									{event.time}
								</span>
								<p className="text-gray-600">{event.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Timeline;
