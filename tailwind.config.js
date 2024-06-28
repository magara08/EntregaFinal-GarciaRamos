/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				pastelViolet: '#C9A0DC',
				pastelPink: '#FFB7C5',
				pastelBlue: '#AEC6CF',
				pastelYellow: '#FDFD96',
				pastelGreen: '#77DD77',
			},
		},
	},
	plugins: [],
}

