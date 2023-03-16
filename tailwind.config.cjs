// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      bg_main: '#211F1F',
      bg_main_2: '#0B0E1080',
      bg_pink: '#FF3465',
      bg_white: '#FEFEFE',
      bg_green: '#AEDBB0',
      text_white: '#FFFFFF',
      text_pink: '#FF3465',
      text_ash: '#9C9C9C',
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
