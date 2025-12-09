/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                oatmeal: '#F5F5F0',
                charcoal: '#2C3E50',
                'accent-green': '#2E4A3D',
                'accent-rust': '#C07858',
                'envelope-taupe': '#E0D8CC',
            },
            fontFamily: {
                heading: ['"Quiche Flare"', 'Marcellus', 'serif'],
                body: ['"Libre Baskerville"', 'serif'],
            },
            animation: {
                'fade-in': 'fadeIn 1.5s ease-out forwards',
                'bounce-slow': 'bounce 3s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
