/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'consolas': 'Consolas, ui-monospace, SFMono-Regular, Menlo, Monaco, "Liberation Mono", "Courier New", monospace'
      },
      boxShadow: {
        'custom': '0 0 6px #d8d8d8'
      }
    },
  },
  plugins: [],
}