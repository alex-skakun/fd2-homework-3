import { splitIntoWords } from './string-utils.js';

export function getWordCount(text){
    let arrayWords = splitIntoWords(text);
    let result = {};
    for (let word of arrayWords) {
        if (!result[word]) {
            result[word] = 1;
        }else {
            result[word] ++;
        }
    }
    return result;
}

const allWords = getWordCount('test text with test words');

console.log(allWords);

const oneWordCount = getWordCount('test text with test words', 'test');

console.log(oneWordCount);