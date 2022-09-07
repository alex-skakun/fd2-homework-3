import { getWordCount } from "./index.js";

const allWords = getWordCount('test text with test words');
const oneWordCount = getWordCount('test text with test words', 'test');
const exactWordsCount = getWordCount('test text with test words', ['test', 'hello']);

console.log(allWords);
console.log(oneWordCount);
console.log(exactWordsCount);