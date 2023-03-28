/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx}', './node_modules/tw-elements/dist/js/**/*.js'],
	theme: {
		fontFamily: {
			display: ['Lato', 'sans-serif'],
			body: ['Lato', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [require('tw-elements/dist/plugin')],
}
