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
			text: '#333333',
			text2: '#4f4f4f',
			placeholder: '#bdbdbd',
		},
		fontFamily: {
			noto: ['Noto Sans', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		extend: {
			width: {
				c: '300px',
				normal: '382.87px',
				modal: '620px',
			},
			height: {
				small: '287.11px',
				modal: '367.2px',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
