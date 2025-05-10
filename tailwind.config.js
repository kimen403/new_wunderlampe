/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#2FC3CA',
        'soft-blue': '#B2FCFF',
        'purple': '#4B2E83',
        'soft-purple': '#9747FF',
        'lilac': '#A596C1',
        'white': '#FFFFFF',
        'black': '#171717',
      },
    },
  },
  plugins: [],
}
