import { timelineEvents } from "../data/timelineEvents";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Timeline = () => {
	const animateFadeUp = useScrollAnimation("animate-fade-in-up");
	const animateFadeUp200 = useScrollAnimation("animate-fade-in-up", {
		delay: 200,
	});

	return (
		<section
			id="timeline"
			className="section bg-rose-50 relative overflow-hidden"
		>
			<h2 ref={animateFadeUp} className="section-title scroll-animate">
				Cronograma del Evento
			</h2>

			<div className="max-w-4xl mx-auto">
				<p
					ref={animateFadeUp200}
					className="text-center text-gray-600 mb-12 scroll-animate"
				>
					Un horario de la celebración para ayudarte a planificar tu noche.
				</p>

				<div className="timeline-container">
					{timelineEvents.map((event, index) => {
						// eslint-disable-next-line react-hooks/rules-of-hooks
						const itemAnimate = useScrollAnimation(
							index % 2 === 0
								? "animate-fade-in-right"
								: "animate-fade-in-left",
							{ delay: 200 + index * 100, triggerOnce: true }
						);
						return (
							<div
								ref={itemAnimate}
								key={event.id}
								className="timeline-item scroll-animate"
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
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Timeline;
