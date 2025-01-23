/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./layouts/**/*.html'],
    theme: {
        extend: {
            colors: {
                lavender: '#eeeefa',
                peach: '#feddd6',
            },
            spacing: {
                gap: '1.5rem',
                'gap-0.5': '0.75rem',
                'gap-1.5': '2.25rem',
            },
            fontFamily: {
                corinthia: 'Corinthia',
                jost: 'jost',
            },
        },
    },
    plugins: [],
}
