import {splitIntoWords} from './string-utils.js';

export function getWordCount(text, word= '') {
    const result = {};
    const resultOfArray = {};
    const chars = splitIntoWords(text);

    for (let i = 0; i < chars.length; i++) {
        const count = result[chars[i]] ? result[chars[i]] : 0;
        result[chars[i]] = count + 1;
    }

    if (arguments.length == 2) {
        if (!Array.isArray(arguments[1])) {
            return (word in result) ? result[word]:0;

        } else {
            word.forEach(el => {
                return (el in result) ? (resultOfArray[el] = result[el]) : (resultOfArray[el] = 0);
            })
            return resultOfArray;
        }

    } else {
        return result;
    }
  }

  const allWords = getWordCount('test text with test words');
  console.log(allWords);

  const oneWordCount = getWordCount('test text with test words', 'test');
  console.log(oneWordCount);

  const exactWordsCount = getWordCount('test text with test words', ['test', 'hello']);
  console.log(exactWordsCount);