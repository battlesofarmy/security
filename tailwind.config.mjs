module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1200px',
        '2xl': '1496px',
      },
    },
    extend: {
      colors: {
        primary: {
          light: "#4f46e5", // Light shade of primary
          DEFAULT: "#1E83EC", // Main primary color
          dark: "#1e3a8a", // Dark shade of primary
        },
      },
    },
  },
  plugins: [],
};
