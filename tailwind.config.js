/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
  theme: {
	  extend: {
		  colors : {
			'gray-blur' : 'rgb(236, 236, 236)',  
			  'yellow' : 'rgb(234, 191, 0)',
			  'black' : 'rgb(27, 26, 32)',
			  'black-blur' : 'rgb(27, 26, 32)',
			  'gray-light' : 'rgba(255 , 255 , 255 , .2)',
			  'gray-thin' : 'rgb(91,90,94)',
			  'yellow-bold' : 'rgb(234 , 191 , 0)',
			  'black-bold' : 'rgb(12, 11, 16)',
		  },
		  boxShadow : {
			  'md' : '0 -2px 5px 2px rgba( 0, 0, 0, 0.4)'
		  },
		  padding : {
			  '15px' : '15px',
		  },
		  gridTemplateColumns : {
			  '2' : 'repeat(2 , 1fr)',
			  '4' : 'repeat(4 , 1fr)',
			  '3' : 'repeat(3 , 1fr)',
			  'lg' : '1fr 4fr'
		  },
		  keyframes : {
			  fadeIn : {
				  'to' : {
					  transform : 'translateX(0)'
				  }
			  },
			  fadeOut : {
				  'from' : { transform : 'translateX(0)' },
				  'to' : {
					  transform : 'translateX(100%)'
				  }
			  }
		  },
		  animation : {
			  'show' : 'fadeIn .2s linear forwards',
			  'hide' : 'fadeOut .2s linear forwards',
		  }
	  },
  },
  plugins: [],
}

