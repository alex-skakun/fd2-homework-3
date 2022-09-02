import { getWordCount } from './index.js';


describe('getWordCount()', () => {

  it('should return empty object', () => {
    const result = getWordCount('test test', []);

    expect(result).toEqual({});
  });

  it('should calculate passed words', () => {
    const result = getWordCount('test text with test words', ['test', 'text', 'hello']);

    expect(result).toEqual({
      test: 2,
      text: 1,
      hello: 0,
    });
  });

  it('should calculate passed one word', () => {
    const testWord = getWordCount('test text with test words', 'test');
    const helloWord = getWordCount('test text with test words', 'hello');

    expect(testWord).toBe(2);
    expect(helloWord).toBe(0);
  });

  it('should calculate all words', () => {
    const results = getWordCount('test text with test words');

    expect(results).toEqual({
      test: 2,
      text: 1,
      with: 1,
      words: 1
    });
  });

});
