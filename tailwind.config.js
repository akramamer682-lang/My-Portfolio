/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        night: {
          900: "#0a0a0a",
          800: "#111111",
          700: "#171717",
          600: "#1f1f1f",
        },
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "system-ui", "sans-serif"],
        mono: ["Fira Code", "Consolas", "monospace"],
      },
    },
  },
  plugins: [],
};
