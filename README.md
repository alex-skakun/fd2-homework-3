# Homework #3

```
Вносите изменения в файл ./src/index.js
```

## Задание

Из файла `index.js` экспортируйте функцию `getWordCount()`, которая будет считать количество повторений определённых слов в тексте.
Функция должна уметь работать в нескольких режимах:

- принимает один аргумент (текст) и возвращает объект с информацией о количестве повторений всех слов;
- принимает два аргумента (текст и слово, повторения которого нужно посчитать) и возвращает число (количество повторений);
- принимает два аргумента (текст и массив слов, повторения которых нужно посчитать) и возвращает объект с количеством повторений только для указанных слов.

### Пример использования функции `getWordCount()`

```javascript
import { getWordCount } from './index.js';

const allWords = getWordCount('test text with test words');

console.log(allWords);
/* prints next
{
  test: 2,
  text: 1,
  with: 1,
  words: 1
}
*/

const oneWordCount = getWordCount('test text with test words', 'test');

console.log(oneWordCount); // prints 2

const exactWordsCount = getWordCount('test text with test words', ['test', 'hello']);

console.log(exactWordsCount);
/* prints next
{
  test: 2,
  hello: 0
}
*/
```

> Для разбиения текста на слова воспользуйтесь функцией `splitIntoWords()` из файла `string-utils.js`

