import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#f6f4f0",
        primary: "#8C6232",
      },
      fontFamily: {
        newsreader: ["Newsreader", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
