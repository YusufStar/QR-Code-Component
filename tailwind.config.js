/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'phone': '375px',
      "samsung": "360px",
      "fold": "280px",
      "big": "1024px",
    },
    colors: {
      'bg': '#d6e2f0',
      'cardbg': '#ffffff',
      'text': '#7b879d',
      'paragraf': '#1f3251',
    },
    extend: {},
  },
  plugins: [],
}
