module.exports = {
  // will be depricated in the near future better to opt in now
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      xl: '1024px'
    },
    extend: {
      boxShadow: {
        bottom: '0px 7px 9px 0px rgba(0,0,0,0.7)'
      }
    }
  },
  variants: {
    extend: {
      boxShadow: ['active']
    }
  },
  plugins: []
};
