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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary : "#4831d4",
        secondary : "#ccf381"
      },
      fontFamily : {
        iranSans : ["var(--font-iran-sans)"],
        teko : ["var(--font-teko)"]
      }
    },
  },
  plugins: [],
} satisfies Config;
