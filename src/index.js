const allWords = 'test text with test words';

const arr = allWords.split(/\s+/);
const words = {};

for (let i = 0; i < arr.length; i++) {

   let word = arr[i].toLowerCase();
   words[word] = (words[word]) ? words[word] + 1 : 1;
                                    }





