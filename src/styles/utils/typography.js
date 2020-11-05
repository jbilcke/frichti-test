/**
 * Typography
 *
 * @param {Object} params
 * @param {string} params.fontSize - The font size
 * @param {string} params.lineHeight - The line height
 * @param {string,number} params.fontWeight - The font weight
 * @param {string} params.textTransform - The text transformation
 * @param {string} params.letterSpacing - The letter spacing
 */
const typography = ({
  fontSize = '1.6rem',
  lineHeight = 'normal',
  fontWeight = 400,
  textTransform = 'none',
  letterSpacing = 'normal',
} = {}) => `
  font: ${fontWeight} ${fontSize}/${lineHeight} 'Open Sans', 'Helvetica', sans-serif;
  letter-spacing: ${letterSpacing};
  text-transform: ${textTransform};
`;

export default typography;
