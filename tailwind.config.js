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
            },
            fontSize: {
                lg: ['1.25rem', 1.15], // 20px
                xl: ['1.5625rem', 1.15], // 25
                '2xl': ['1.875rem' , 1.15], // 30px
            },
            breakpoints: {
                '3xl': '1900px'
            }
        },
        fontFamily: {
            'sans': 'Everett, sans',
            'mono': ['Everett Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace']
        },

    },
    variants: {
        extend: {},
    },
    plugins: [],
}
