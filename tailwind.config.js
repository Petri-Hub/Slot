/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./src/renderer/index.html",
      "./src/renderer/src/**/*.{js,ts,jsx,tsx}",
   ],
   darkMode: 'selector',
   theme: {
      extend: {
         gridTemplateColumns: {
            'timer': '1fr 1fr min-content 1fr 1fr'
         }
      },
   },
   plugins: [],
}