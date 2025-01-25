/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background_1: "var(--background-1)",
        background_2: "var(--background-2)",
        color_10: "var(--color-10)",
        color_20: "var(--color-20)",
        color_30: "var(--color-30)",
        color_40: "var(--color-40)",
      },
    },
  },
  plugins: [],
};
