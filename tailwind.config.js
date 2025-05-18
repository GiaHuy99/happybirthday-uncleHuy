/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				purple: {
					light: "#C2B2D5",
					dark: "#BA5AFE",
					lighter: "#faf4ff",
				},
				white: "#ffffff",
				black: "#000000",
			},
			fontFamily: {
				sans: ["Raleway", "sans-serif"],
				display: ["Playfair Display", "serif"],
				script: ["Great Vibes", "cursive"],
			},
			keyframes: {
				float: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
			},
			animation: {
				float: "float 3s ease-in-out infinite",
				fadeIn: "fadeIn 1s ease-out",
			},
			backgroundImage: {
				"floral-pattern":
					"url('https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
			},
		},
	},
};
