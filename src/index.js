import { splitIntoWords } from './string-utils.js';

export function getWordCount(text, words) {
  const allWords = splitIntoWords(text);
  const arrayWords = words instanceof Array ? words : allWords;
  const objectResult = {};

  if (typeof words === 'string') {
    return allWords.filter((word) => word === words).length;
  }

  arrayWords.forEach(
    (item) =>
      (objectResult[item] = allWords.filter((word) => item === word).length)
  );

  return objectResult;
}

// console.log(getWordCount('test text with test words'));
// {test: 2, text: 1, with: 1, words: 1}

// console.log(getWordCount('test text with test words', 'test'));
// 2

// console.log(getWordCount('test text with test words', ['test', 'hello']));
// {test: 2, hello: 0}

console.log(getWordCount('test test', []));
// {}
