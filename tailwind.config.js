/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.js', './**/*.html'], // no caso dos projetos do frontend mentor
    theme: {
        extend: {
            colors: {
                primary: {
                    light_red: 'hsl(0, 100%, 67%)',
                    orangey_yellow: 'hsl(39, 100%, 56%)',
                    Green_teal: 'hsl(166, 100%, 37%)',
                    Cobalt_blue: 'hsl(234, 85%, 45%)',
                },
                gradients: {
                    light_slate_blue: 'hsl(252, 100%, 67%)',
                    light_royal_blue: 'hsl(241, 81%, 54%)',
                    violet_blue: 'hsla(256, 72%, 46%, 1)',
                    persian_blue: 'hsla(241, 72%, 46%, 0)',
                },
                neutral: {
                    white: 'hsl(0, 0%, 100%)',
                    pale_blue: 'hsl(221, 100%, 96%)',
                    light_lavender: 'hsl(241, 100%, 89%)',
                    dark_gray_blue: 'hsl(224, 30%, 27%)',
                },
            },
            fontFamily: {
                hanken_grotesk: ['Hanken Grotesk', 'sans-serif'],
            },
            fontSize: {
                body: '18px',
            },
        },
    },
    plugins: [],
};
