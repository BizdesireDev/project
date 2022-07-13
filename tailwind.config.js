/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000',
      'primary': {
        100: '#009289',
      },
      'heading': {
        100: '#212121',
      },
      'typography': {
        100: '#212121',
        200: '#999999',
        300: '#7C7C7C',
        400: '#5A5A5A',
        500: '#BDBDBD',
        600: '#5A5A5A',
        700: '#DD1B1E',
        800: '#818181',
        900: '#161615',
        1000: '#009289',
      },
      'border-img': {
        100: '#E6E6E6',
        200: '#BDBDBD',
        300: '#F1F1F1',
        400: '#212121',
        500: '#fff',
      },
      'back': {
        100: 'rgba(221,27,30,0.9)',
        200: '#009289',
        'hover': '#F9F9F9',
        '300': '#999',
        '400': '#212121',
        '500': '#E6E6E6',
        '600': '#f8f8f8',
        '700': '#818181',
        '800': '#DD1B1E',
        '900': '#fff',
        'blend': '#9A9999',
        'blendMode': '#c1c1c1',
      }
    },
    width: {
      '217': "217px",
      'container-width': "1544px",
    },
    // spacing: {
    //   '20px': "20px",
    //   '12px': "12px",
    //   '8px': "8px",
    // },
    lineHeight: {
      '20': '20px',
      '12': '3rem',
    },
    fontSize: {
      '16': '16px',
      '14': '14px',
      '12': '12px',
    },
    extend: {},
    fontFamily: {
      Manrope: ["Manrope"],
    },
    backgroundImage: {
      'banner1': "url('./src/assets/image/banner-1.png')",
      'banner2': "url('./src/assets/image/banner-2.png')",
      'banner3': "url('./src/assets/image/banner-3.png')",
      'banner4': "url('./src/assets/image/banner-4.png')",
      'banner5': "url('./src/assets/image/banner-5.png')",
      'register': "url('./src/assets/image/register.png')",
      'more1': "url('./src/assets/image/more-1.png')",
      'more2': "url('./src/assets/image/more-2.png')",
      'more3': "url('./src/assets/image/more-3.png')",
      'more4': "url('./src/assets/image/more-4.png')",
      'more5': "url('./src/assets/image/more-5.png')",
      'babyProduct': "url('./src/assets/image/baby-product.png')",
      'brand1': "url('./src/assets/image/brand1.png')",
      'brand2': "url('./src/assets/image/brand2.png')",
      'brand3': "url('./src/assets/image/brand3.png')",
      'brand4': "url('./src/assets/image/brand4.png')",
      'brand5': "url('./src/assets/image/brand5.png')",
      'brand6': "url('./src/assets/image/brand6.png')",
      'brand7': "url('./src/assets/image/brand7.png')",
      'brand8': "url('./src/assets/image/brand8.png')",
      'medical': "url('./src/assets/image/medical.png')",
      'arrival1': "url('./src/assets/image/arrival1.png')",
      'arrival2': "url('./src/assets/image/arrival2.png')",
      'footer': "url('./src/assets/image/footer.png')",
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    },
    opacity: {
      '80': ".8",
    },
    variants: {
      extend: {},
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}



// extend: {
//   fontFamily: {
//     'poppins': ['Poppins', 'sans-serif'] 
//   },