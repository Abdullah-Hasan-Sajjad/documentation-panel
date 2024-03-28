/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'navbar-bg': '#F9F9FA',
        //'sidebar-bg': '#121C2D',
        'sidebar-bg': '#F9FAFB',
        'navborder': '#e1e3ea',
        'sideNavborder': '#394762',
        'sidePanelTxt': '#cacdd8', 
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),    
  ],
};