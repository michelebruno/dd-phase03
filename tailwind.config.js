module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}'
    ],
    mode: 'jit',
    theme: {
        extend: {
            colors: {
                'promask': '#3514FF',
                'nomask': '#EA3C9A',
                'light': '#CFFF58',
                'light-darker': '#B3E537',
                'gray': '#A2A2A2'
            }
        },
        fontFamily: {
            'sans': 'Everett, sans'
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
