import { splitIntoWords } from "./string-utils"

const getWordCount = (text, words) => {
    if (text && Array.isArray(words) && words.length === 0) {
    return {}
    }

    const allWords = splitIntoWords(text)
    if (typeof words === 'string') {

        return allWords.filter((word) => {
            return word === words
        }).length
    }

    const arrayOfSearchWords = Array.isArray(words) ? words : allWords
    const result = {}

    arrayOfSearchWords.forEach((searchWord) => {
        result[searchWord] = allWords.filter((word) => {
            return word === searchWord
        }).length
    }) 
    return result
}

export { getWordCount }