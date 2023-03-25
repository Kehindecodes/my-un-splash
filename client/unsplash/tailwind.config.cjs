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
		screens: {
			xs: '320px',
			sm: '640px',
			md: '764px',
			lg: '1024px',
			xl: '1280px',
		},
		extend: {
			width: {
				c: '300px',
				small: '120px',
				// normal: '382.87px',
				small_c: '100px',
				modal: '620px',
			},
			height: {
				small: '287.11px',
				modal: '367.2px',
				smallmodal: '220px',
			},
			screens: {
				small: '320px',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
