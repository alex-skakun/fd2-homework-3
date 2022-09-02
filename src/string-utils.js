/**
 * @param { string } text
 * @return string[]
 */
export function splitIntoWords(text) {
  return text
    .replace(/[^A-zА-я\s]/g, '')
    .split(/\s+/);
}
