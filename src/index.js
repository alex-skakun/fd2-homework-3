import { splitIntoWords } from "./string-utils.js";

function getObjectElements(arrayAllWords, uniqueElements) {
  let objectElemens = {};

  uniqueElements.forEach(function (item1) {
    let amount = 0;

    arrayAllWords.forEach(function (item2) {
      amount += item1 === item2 ? 1 : 0;
    });

    objectElemens[item1] = amount;
  });

  return objectElemens;
}

export function getWordCount(text, argument) {
  let arrayAllWords = splitIntoWords(text);
  let arrayUniqueElements = [];

  arrayAllWords.forEach(function (item) {
    if (!arrayUniqueElements.includes(item)) {
      arrayUniqueElements.push(item);
    }
  });

  if (argument === undefined) {
    return getObjectElements(arrayAllWords, arrayUniqueElements);
  }

  if (Array.isArray(argument)) {
    return getObjectElements(arrayAllWords, argument);
  }

  if (typeof argument === "string") {
    let amount = 0;
    arrayAllWords.forEach(function (item) {
      if (item === argument) {
        amount++;
      }
    });

    return amount;
  }
}
