import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import EventDetails from "./components/EventDetails";
import Timeline from "./components/Timeline";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";

function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1500);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	if (isLoading) {
		return (
			<div className="fixed inset-0 bg-purple-lighter flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-4xl font-script text-purple-dark mb-4">Salomé</h1>
					<div className="spinner"></div>
				</div>
			</div>
		);
	}

	return (
		<div className="overflow-x-hidden min-h-screen bg-gradient-to-b from-rose-50 to-white">
			<Navbar />
			<main>
				<Hero />
				<About />
				<Gallery />
				<EventDetails />
				<Timeline />
				<RSVP />
			</main>
			<Footer />
		</div>
	);
}

export default App;
