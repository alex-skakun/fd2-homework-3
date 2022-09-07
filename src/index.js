// console.log(getWordCount('hello la ala hello hello la', 'la'));
import { splitIntoWords } from "./string-utils.js";


export function getWordCount(text,words) {
const allWords = splitIntoWords(text);


if ( typeof words === 'string') {

var result = {};
var indices = [];
var idx = allWords.indexOf(words);
while (idx != -1) {
  indices.push(idx);
  idx = allWords.indexOf(words, idx + 1);
}

result = indices.length

return result;}

else if (Array.isArray(words))  {

    const ArrayWords = words;
    var result = {}
    ArrayWords.forEach((CountWord) => {
        result[CountWord] = allWords.filter((word) => {
            return word === CountWord;
        }).length
    }) 
    
 return result;

}
else {

    var result = {};
allWords.forEach(function(a){
    if (result[a] != undefined)
        ++result[a];
    else
        result[a] = 1;
});
 return result;
}
}




