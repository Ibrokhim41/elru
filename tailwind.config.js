module.exports = {
    purge: [],
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        container: {
            screens: {
                sm: "100%",
                // 576px
                md: "768px",
                lg: "992px",
                xl: "1200px",
                "2xl": "1440px",
            },
        },
        colors: {
            blue: {
                DEFAULT: "#01BEDE",
                dark: "#445268",
            },
            grey: {
                DEFAULT: "#C0C0C0",
                light: "#F3F6F9",
                dark: "#616D75",
            },
            black: {
                DEFAULT: "#3E4549",
                dark: "#242424",
            },
            red: {
                DEFAULT: "#EA3B3B",
                light: "#F13636",
                dark: "#D64C4C",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
