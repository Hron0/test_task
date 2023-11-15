/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "../index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    },
    colors: {
      "white": "#ffffff",
      "gray": "#333333",
      "lgray": "#919090",
      "blue": "#0078ff",
      "black": "#000000",
      "blLogo": "#111111",
      "red": "#ff5733",
      "green": "#46ff33",
      "pink": "#ff33e9",
      "cyan": "#33ffe6"
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '2100px'
    }
  },
  plugins: [],
}

