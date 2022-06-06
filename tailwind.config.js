module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Rampart: ["Rampart One", "cursive"],
				Montserrat: ["Montserrat", "normal"],
				Sanspro: ["Source Sans Pro", "normal"],
				Inconsolata: ["Inconsolata", "normal"],
				TaiHeritagePro :["Tai Heritage Pro","normal"],
			},
		},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};
