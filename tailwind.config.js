/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#0c4a6e",
          "secondary": "#374151",
          "accent": "#7dd3fc",
          "neutral": "#e5e7eb",
          "base-100": "#e5e7eb",
          "info": "#7dd3fc",
          "success": "#00ffff",
          "warning": "#fef3c7",
          "error": "#fecaca",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          secondary: "#9cd7e6",
        },
      },
      "dark", "light"
    ],
  },
  plugins: [require("daisyui")],
}