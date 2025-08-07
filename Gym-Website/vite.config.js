import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#fe9808",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
        dark: "#111111",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [
    tailwindcss(),
    react()],
})
