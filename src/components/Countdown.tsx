import { useState, useEffect } from "react";

interface CountdownProps {
	targetDate: string;
}

const Countdown = ({ targetDate }: CountdownProps) => {
	const calculateTimeLeft = () => {
		const difference = +new Date(targetDate) - +new Date();
		let timeLeft = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
		};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearTimeout(timer);
	});

	const padWithZero = (num: number): string => {
		return num.toString().padStart(2, "0");
	};

	return (
		<div className="countdown-container">
			<div className="countdown-item">
				<div className="countdown-number">{padWithZero(timeLeft.days)}</div>
				<div className="countdown-label">Días</div>
			</div>

			<div className="countdown-item">
				<div className="countdown-number">{padWithZero(timeLeft.hours)}</div>
				<div className="countdown-label">Horas</div>
			</div>

			<div className="countdown-item">
				<div className="countdown-number">{padWithZero(timeLeft.minutes)}</div>
				<div className="countdown-label">Minutos</div>
			</div>

			<div className="countdown-item">
				<div className="countdown-number">{padWithZero(timeLeft.seconds)}</div>
				<div className="countdown-label">Segundos</div>
			</div>
		</div>
	);
};

export default Countdown;
