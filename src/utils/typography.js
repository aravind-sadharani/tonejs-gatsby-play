import Typography from "typography"

const tonejsPlayTheme = {
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  scaleRatio: 2,
  headerFontFamily: [
    "Noto Sans",
    "sans-serif",
  ],
  bodyFontFamily: [
    "Noto Sans",
    "sans-serif",
  ],
  googleFonts: [
     {
       name: "Noto Sans",
       styles: [
         "400",
         "700",
       ],
     },
  ]
}

const typography = new Typography(tonejsPlayTheme)

export default typography
