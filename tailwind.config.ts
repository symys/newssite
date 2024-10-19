import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGray: '#63676C',
        lightGray: '#E1E6EB',
        trtBlue: '#0089CC',
        middleGray: '#A0A5AA'

      },
      fontFamily: {
        noto: ['Noto Serif', 'serif'], 
      },
    },
  },
  plugins: [],
};
export default config;
