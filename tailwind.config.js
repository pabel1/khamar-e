/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      sm:'576px',
      md:'764px',
      lg:'992px',
      xl:'1200px'
    },
    container:{

      center:true,
      padding:"20px",
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1270px',
        '2xl': '1400px',
        // '3xl': '1538px',
       
      }
    },
    extend: {
      colors:{
        secondary:'#008000',
        mybg:'#f3f6ff',
        primaryColor:'#FF6F61',
        darkPrimary:"#ff6f61b3",
        textDark:'#666666',
        textLight:'#999999',
        primaryText:'#353535',
        whiteColor:'#ffffff',
      },
      fontFamily:{
        myfont: ['Source Code Pro', 'monospace']
      }

    },
  },
  plugins: [],
}
