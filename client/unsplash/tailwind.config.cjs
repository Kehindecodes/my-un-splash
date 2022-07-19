/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		colors: {
			grey: '#bdbdbd',
			gren: '#3DB46D',
			white: '#ffffff',
		},
		fontFamily: {
			noto: ['Noto Sans', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		extend: {
			width: {
				c: '300px',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
