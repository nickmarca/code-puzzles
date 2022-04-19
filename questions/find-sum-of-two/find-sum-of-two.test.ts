import { findSumOfTwo, findSumOfTwo1 } from './find-sum-of-two'; 

describe('findSumOfTwo', () => {
  const tests = [
    {
      name: 'test A',
      input: [5, 7, 1, 2, 8, 4, 3],
      target: 10,
      output: true,
    },
    {
      name: 'test B',
      input: [5, 7, 1, 2, 8, 4, 3],
      target: 11,
      output: true,
    },
    {
      name: 'test C',
      input: [5, 7, 1, 2, 8, 4, 3],
      target: 16,
      output: false,
    },
    {
      name: 'test D',
      input: [2, 3, 5, 6, 7, 8],
      target: 4,
      output: false,
    },
  ];

  tests.forEach(({ input, output, name, target }) => {
    it(name, () => {
      expect(findSumOfTwo(input, target)).toBe(output);
      expect(findSumOfTwo1(input, target)).toBe(output);
    });
  });
});