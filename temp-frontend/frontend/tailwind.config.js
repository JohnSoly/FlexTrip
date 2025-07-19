/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./public/index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
      "node_modules/flowbite/**/*.js",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: "#FFCC2A", // Your main primary color
            light: "#FFE799",  // A lighter shade for backgrounds (e.g., active pagination)
            dark: "#CC9900",   // A darker shade for hover states
            // You can add more shades if needed, e.g., '50', '100', ..., '900'
          },
        },
        animation: {
          blob: "blob 7s infinite",
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
        keyframes: {
          blob: {
            "0%": { transform: "translate(0px, 0px) scale(1)" },
            "33%": { transform: "translate(30px, -50px) scale(1.1)" },
            "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
            "100%": { transform: "translate(0px, 0px) scale(1)" },
          },
        },
      },
    },
    plugins: [
      require("flowbite/plugin")
    ],
  };
  