import { splitIntoWords } from "./string-utils.js";

export function getWordCount(text, words) {
  if (text !== undefined && words == undefined) {
    console.log("1");
    const allWords = {};
    let arr = splitIntoWords(text);
    arr.forEach(function (item, i, arr) {
      let newArr = [];
      newArr = arr.filter(function (item2) {
        return item == item2;
      });
      allWords[item] = newArr.length;
    });
    return allWords;
  }
  if (text !== undefined && !Array.isArray(words)) {
    console.log("2");

    let arr = splitIntoWords(text);
    let newArr = [];
    newArr = arr.filter(function (item) {
      return words == item;
    });
    return newArr.length;
  }
  if (text !== undefined && Array.isArray(words)) {
    console.log("3");

    let arr = splitIntoWords(text);
    let exactWordsCount = {};

    words.forEach(function (item, i, words) {
      let newArr = [];
      newArr = arr.filter(function (item2) {
        return item == item2;
      });
      exactWordsCount[item] = newArr.length;
    });
    return exactWordsCount;
  }
}
