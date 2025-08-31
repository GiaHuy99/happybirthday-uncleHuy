import { useEffect, useState } from "react";
import LoadingPage from "./components/LoadingPage";

import Hero from "./components/Hero";


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

			<main>
				<Hero />

			</main>

		</div>
	);
}

export default App;
