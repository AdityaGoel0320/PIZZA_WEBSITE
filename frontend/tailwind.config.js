// tailwind.config.js
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
        'xl': '32px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // <-- Corrected syntax
    require('@tailwindcss/aspect-ratio'),
    require("daisyui")
  ],
  daisyui: {
    themes: [],
  },
});
