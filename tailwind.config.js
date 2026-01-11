/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0b0b0f',
        card: '#15151c',
        text: '#eaeaf0',
        muted: '#9a9aa3',
        accent: {
          red: '#ff3b3b',
          blue: '#3b82f6',
        },
      },
    },
  },
  plugins: [],
}
