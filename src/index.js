import { splitIntoWords } from './string-utils.js';
import { iterateWords } from './iterateWords.js';
import { wordsCounter } from './wordsCounter.js';

export function getWordCount(text, options) {
    const wordsArray = splitIntoWords(text);

    if (options) {
        if (Array.isArray(options)) {
            const result = options.length === 0 ? {} : iterateWords(wordsArray, options);

            return result;
        }

        const wordRepeat = wordsCounter(wordsArray, options);

        return wordRepeat;
    }

    const result = iterateWords(wordsArray);

    return result;
}