/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Pop: ['Poppins', 'sans-serif'],
        Quick: ['Quicksand', 'sans-serif'],
        Opens: ['Open Sans', 'sans-serif'],
        Robot: ['Roboto', 'sans-serif'],
        Logo: ['Permanent Marker', 'cursive'],
        Mono: ["JetBrains Mono", "monospace"],
        Edu: ["Edu AU VIC WA NT Hand", "cursive"]
      },
      colors: {
        color_1: '#050C9C',
        color_2: '#3572EF',
        color_3: '#3ABEF9',
        color_4: '#A7E6FF'
      }
    },
    
  },
  
  plugins: [],
}