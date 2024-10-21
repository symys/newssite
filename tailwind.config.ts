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
        middleGray: '#A0A5AA',
        popularGray: '#BFC3C9',
        popularTitleGray: '#22262A',
        tagBackground: '#EDF2F7',
        tagText: '#777C80',

      },
      fontSize:{
        size42 : '42px',
        size28: '28px',
      },
      fontFamily: {
        noto: ['Noto Serif', 'serif'], 
      },
      screens: {
        'screen992': {'max': '992px'}, // 992px and smaller than it
        'screen768' : {'max': '768px'},
        'screen576' : {'max': '576px'},
        'screen320' : {'max': '320px'},
        'between768and992': {'min': '768px', 'max': '992px'}, 
        'between768and576': {'min': '576px', 'max': '768px'}, 

      },
    },
  },
  plugins: [],
};
export default config;
