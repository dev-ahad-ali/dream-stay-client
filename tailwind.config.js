/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'ooh-baby': '"Oooh Baby", cursive',
        'lora': '"Lora", serif',
      },
    },
  },
  plugins: [],
};
