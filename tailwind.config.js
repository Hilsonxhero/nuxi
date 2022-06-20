module.exports = {
  theme: {
    extend: {
      spacing: {
        80: "20rem",
        108: "27rem",
        160: "40rem",
      },
      inset: {
        "-16": "-4rem",
      },
      fontSize: {
        xxs: "0.625rem",
      },
      boxShadow: {
        "outline-green": "0 0 0 3px rgba(5,202,160, 0.8)",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2rem",
      },
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1300px",
      },
    },
  },
  // plugins: [require("@tailwindcss/forms")],
  important: true,
};
