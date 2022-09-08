import { splitIntoWords } from './string-utils.js';


export function getWordCount (text, words) {
    const allWords = splitIntoWords(text);
    const arrWords = words instanceof Object ? words : allWords;
    const obj = {};

    
    if (typeof words === 'string') {
        return allWords.reduce((acc, item) => (item === words ? acc+1 : acc ), 0 );
        
    }

   
    arrWords.forEach(item => (obj[item] = allWords.filter(word => item === word).length));

    return obj;
}
      

console.log(getWordCount('test text with test words'));      //{test: 2, text: 1, with: 1, words: 1}
console.log(getWordCount('test text with test words', 'test'));    //2
console.log(getWordCount('test text with test words', ['test', 'hello']));  //{test: 2, hello: 0}
console.log(getWordCount('test test', [])); //{}



















