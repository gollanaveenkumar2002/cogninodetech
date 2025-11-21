/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#e6f1ff',
                    100: '#b3d7ff',
                    200: '#80bdff',
                    300: '#4da3ff',
                    400: '#1a89ff',
                    500: '#0070f3',
                    600: '#005cc0',
                    700: '#00478d',
                    800: '#00325a',
                    900: '#001d27',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
