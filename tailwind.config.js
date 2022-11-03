/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "src/pages/**/*.{js,ts,jsx,tsx}",
        "src/components/**/*.{js,ts,jsx,tsx}",
        "src/layouts/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: 8
        },
        extend: {
            fontFamily: {
                sans: ['iransans']
            },
            colors: {
                'primary': '#4F55FB',
                'first-gradient-primary': '#7346FF',
                'second-gradient-primary': '#7545FF',
                'shadow' : '#E6E7FE',
                'custom-yellow' : '#FEE015'
            }
        },
    },
    plugins: [],

}