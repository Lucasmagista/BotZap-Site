/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#f8f9fa',
          100: '#eaebed',
          200: '#d0d3d9',
          300: '#adb3bc',
          400: '#7d838f',
          500: '#61666f',  // Cor principal do BotZap
          600: '#4a4d54',
          700: '#36383c',
          800: '#212224',
          900: '#121314',
          950: '#0a0a0a',
        },
        // Substituindo cores vibrantes por tons de cinza
        'secondary': {
          50: '#ffffff',
          100: '#f5f5f5',
          200: '#e9e9e9',
          300: '#d9d9d9',
          400: '#c4c4c4',
          500: '#9d9d9d',
          600: '#818181',
          700: '#6a6a6a',
          800: '#474747',
          900: '#2c2c2c',
          950: '#1a1a1a',
        },
        'neutral': {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
