/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['"Roboto"', 'sans-serif'],
        'heading': ['"Press Start 2P"', 'system-ui'],  
      },
     backgroundImage: {
        'custom-radial': 'linear-gradient(90deg, rgba(35,34,40,1) 12%, rgba(40,52,124,1) 36%, rgba(35,34,40,1) 100%);',
      },
      
      backgroundSize: {
        'custom-size': 'cover, cover, 100px 100px',
      },
      backgroundRepeat: {
        'no-repeat': 'no-repeat',
      },
    },
  },
  plugins: [],
}