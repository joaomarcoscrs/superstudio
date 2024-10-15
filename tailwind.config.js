const { theme } = require('./src/theme');

function createTailwindColors(mantineColors) {
  const tailwindColors = {};
  const scale = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  mantineColors.forEach((color, index) => {
    tailwindColors[scale[index]] = color;
  });

  return tailwindColors;
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purboflow: createTailwindColors(theme.colors.purboflow),
        aquavision: createTailwindColors(theme.colors.aquavision),
      },
    },
  },
  plugins: [],
};
