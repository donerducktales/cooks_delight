/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',

      // Or if using `src` directory:
      './src/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         
      },
      colors: {
         background: '#F0EBE1',
         dark: '#262522',
         primaryGreen: '#9FDC26',
         primaryOrange: '#F29C33',
         primaryRed: '#EE6352',
         primaryLightBlue: '#C4E5FC',
         light: '#FFFBF2',
      },
   },
   plugins: [],
}

