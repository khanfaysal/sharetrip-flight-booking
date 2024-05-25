
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
            container: {
                center: true,
            },
            colors: {
                primary: {
                    DEFAULT: "#E8F3FF",
                },
                secondary: {
                    DEFAULT: "#1882FF",
                }
            },
            // fontFamily: {
            //     murecho: ["Murecho", "sans-serif"],
            //   },
            fontSize: {
                "heading": [
                    "1.125rem",
                    {
                        fontWeight: "600",
                        lineHeight: "1.5rem",
                        letterSpacing: "-1%",
                    },
                ],
                "paragraph": [
                    "0.875rem",
                    {
                        fontWeight: "400",
                        lineHeight: "1.5rem",
                    },
                ],
            },
        },
  },
  plugins: [],
}