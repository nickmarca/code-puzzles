import { missingNumber, missingNumber1 } from './find-the-missing-number-in-the-array'; 

describe('missingNumber', () => {
  const tests = [
    {
      name: 'test A',
      input: [3, 7, 1, 2, 8, 4, 5],
      output: 6,
    },
    {
      name: 'test B',
      input: [6, 7, 1, 2, 8, 4, 5],
      output: 3,
    },
    {
      name: 'test C',
      input: [3, 7, 1, 2, 8, 4, 5, 6, 10],
      output: 9,
    },
    {
    name: 'test D',
      input: [3, 7, 2, 8, 4, 5, 6, 10],
      output: 9,
    },
  ];

  tests.forEach(({ input, output, name }) => {
    it(name, () => {
      expect(missingNumber(input)).toBe(output);
      expect(missingNumber1(input)).toBe(output);
    });
  });
});