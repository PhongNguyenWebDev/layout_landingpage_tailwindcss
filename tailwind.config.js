/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './index.html/',
  ],
  theme: {
    container:{
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1520px'
    },
    extend: {
      colors: {
        primary: '#242a2b',
        secondary: '#808080',
        testimonials: '#E8F9FB',
        accent: {
          DEFAULT: '#1cbccf',
          secondary: '#18abbc',
          tertiary: '#90c6cd',
        },
        grey: '#e8f0f1',
      },
      fontFamily:{
        primary: 'Poppins'
      },
      boxShadow: {
        custom1: '0px 2px 40px 0px rgba(8, 70, 78, 0.08)',
        custom2: '0px 2px 40px 0px rgba(8, 70, 78, 0.08)',
      },
      backgroundImage:{
        quoteLeft: 'url("/assets/icons/testimonials/quote-left.svg")',
        quoteRight: 'url("/assets/icons/testimonials/quote-right.svg")',
        departments: 'url("/assets/img/departments/bg.svg")'
      }
    },
  },
  plugins: [],
}

