export function wordsCounter(wordsArr, word) {
    const arrOfSimilarWords = wordsArr.filter(elem => elem === word);

    return arrOfSimilarWords.length;
}