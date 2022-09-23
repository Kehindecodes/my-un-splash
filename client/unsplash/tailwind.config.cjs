/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		colors: {
			grey: '#bdbdbd',
			gren: '#3DB46D',
			white: '#ffffff',
			red: ' #EB5757',
			black: '#000000;',
			trans: 'rgba(0, 0, 0, 0.38)',
		},
		fontFamily: {
			noto: ['Noto Sans', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		extend: {
			width: {
				c: '300px',
				normal: '382.87px',
			},
			height: {
				small: '287.11px',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
