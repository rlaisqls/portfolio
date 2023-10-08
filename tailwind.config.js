/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        gray: "var(--gray)",
        lightgray: "var(--lightgray)",
        main: "var(--main)",
        white: "var(--white)",
      },
      cursor: {
        zoomIn: '-webkit-zoom-in',
      },
    },
    variants: {
      extend: {
        cursor: ['hover'],
      },
    },
    fontSize: {
      default: [
        "15.3px",
        {
          fontWeight: "500",
          lineHeight: "27px"
        },
      ],
      head1: [
        "36px",
        {
          fontWeight: "700"
        },
      ],
      head2: [
        "30px",
        {
          fontWeight: "700"
        },
      ],
      head3: [
        "20.7px",
        {
          fontWeight: "700"
        },
      ],
      head4: [
        "17px",
        {
          fontWeight: "500"
        },
      ]
    }
  },
  plugins: [],
};