module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      dark: "#2F2F2F",
      red: {
        500: "#CC1818",
      },
      grey: {
        100: "#E8E8E8",
        150: "#CCCCCC",
        200: "#D0D0D0",
        300: "#C0C0C0",
        400: "#B0B0B0",
        500: "#A0A0A0",
        600: "#888888",
        700: "#707070",
      },
    },
    extend: {
      boxShadow: {
        primary:
          "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};
