import { wordsCounter } from "./wordsCounter.js";

export function iterateWords(wordsArr, options) {
    let result = {};

    result = mapWords(wordsArr, options);

    return result;
}

function mapWords(wordsArr, options) {
    const result = {};
    const modifyArr = Array.isArray(options) ? options : wordsArr;

    modifyArr.map(word => {
        const wordRepeat = wordsCounter(wordsArr, word);

        result[word] = wordRepeat;
    });

    return result;
}