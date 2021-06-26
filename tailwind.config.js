module.exports = {
    purge: [],
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        screens: {
            sm: "576px",
            md: "769px",
            lg: "1024px",
            xl: "1200px",
        },
        container: {
            screens: {
                sm: "100%",
                md: "992px",
                lg: "1200px",
                xl: "1440px",
            },
        },
        colors: {
            white: {
                DEFAULT: "#fff",
            },
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
                black: "#000",
                DEFAULT: "#3E4549",
                dark: "#242424",
            },
            red: {
                DEFAULT: "#EA3B3B",
                light: "#F13636",
                dark: "#D64C4C",
            },
            green: {
                DEFAULT: "#219653",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
