import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import EventDetails from "./components/EventDetails";
// import Timeline from "./components/Timeline";
// import RSVP from "./components/RSVP";
// import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";

function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Initialize AOS animation library
		AOS.init({
			duration: 1000,
			once: false,
			mirror: true,
		});

		// Simulate loading
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1500);

		return () => clearTimeout(timer);
	}, []);

	if (isLoading) {
		return (
			<div className="fixed inset-0 bg-rose-50 flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-4xl font-script text-rose-500 mb-4">Salomé</h1>
					<div className="spinner"></div>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
			<Navbar />
			<main>
				<Hero />
				<About />
				<Gallery />
				<EventDetails />
				{/*   <Timeline /> */}
				{/*   <RSVP /> */}
			</main>
			{/* <Footer /> */}
		</div>
	);
}

export default App;
