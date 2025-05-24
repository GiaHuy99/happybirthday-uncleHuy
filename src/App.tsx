import { useEffect, useState } from "react";
import LoadingPage from "./components/LoadingPage";
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
		return <LoadingPage />;
	}

	return (
		<div className="overflow-x-hidden min-h-screen">
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
