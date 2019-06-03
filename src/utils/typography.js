import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '15px',
  baseLineHeight: 1.6,
  googleFonts: [
    {
      name: 'Noto Sans JP',
      styles: ['400', '500', '700'],
    },
    {
      name: 'Open Sans',
      styles: ['400', '400i', '700', '700i'],
    },
  ],
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  headerFontFamily: ['Noto Sans JP', 'sans-serif'],
  bodyFontFamily: ['Lato', 'sans-serif'],
  overrideStyles: ({ rhythm }, options, styles) => ({
    h2: {
      fontSize: '60px',
      marginBottom: '30px'
    },
    h3: {
      fontSize: '40px',
      marginBottom: '30px',
      lineHeight: '1.1'
    },
    h4: {
      fontSize: '18px'
    }
  }),
})

export default typography