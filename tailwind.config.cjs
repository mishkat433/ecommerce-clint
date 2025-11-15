/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Next.js 13+ app folder
    "./pages/**/*.{js,ts,jsx,tsx}", // pages folder
    "./components/**/*.{js,ts,jsx,tsx}" // components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'), // <-- Add DaisyUI here
  ],
  daisyui: {
    themes: ["light", "dark"], // You can customize your themes here
  },
}
  
//   colors: {
//     'aide-bg': '#FDFBF8',
//     'aide-secondary-bg': '#F9FAFB',
//     'aide-gray': '#eee',
//     'blue-bg': '#E6EFFB',
//     'aide-primary': '#00AF9E',
//     'heading-text': '#212121',
//     'icon-color': '#6F767E',
//     'error-color': '#F43F5E',
//     'error-bg': 'rgba(255, 0, 0, 0.1)',
//     'border-color': '#E5E7EB',
//     'btn-hover-color': '#07B6B6',
//     'blue-text': '#007ACC',
//     'blue-light': '#E6EFFB',
//     'green-text': '#0F870F',
//     'green-light': '#CFE7CF',
//     'star-color': '#FFC107',
//     'yellow-text': "#CA8A2A",
//     'yellow-light': '#FEFFD9',
//     'green-yellow-text': '#56CA00',
//     'light-gray': '#F7F7F9',
//   },
// },