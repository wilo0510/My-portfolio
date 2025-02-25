import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-cascadia)", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          purple: "var(--primary-purple)",
          blue: "var(--primary-blue)",
        },
        secondary:{
          purple: "var(--secondary-purple)",
          lightBlue: "var(--secondary-light-blue)",
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
