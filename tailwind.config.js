/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        btnblu: "#002F6C",
      },
      fontFamily: { 
        dot: ['dot', 'sans-serif'], 
        led: ['led', 'monospace']
      },
      fontSize: {
        smm: ['13px']
      },
      letterSpacing: {
        widest1: '.25em'
      },
      spacing:{
        15:"60px",
        150:"550px",
        140:"400px",
        180:"800px"
      },
      borderWidth:{
        1: "1px",
      }
    },
  },
  plugins: [
    function({ addUtilities, addComponents, e, prefix, config }) {
      const newUtilities = {
        '.horizontal-tb': {
          writingMode: 'horizontal-tb',
        },
        '.vertical-rl': {
          writingMode: 'vertical-rl'
        },
        '.vertical-lr': {
          writingMode: 'vertical-lr'
        }
      }
      addUtilities(newUtilities)
    }
  ],
}

