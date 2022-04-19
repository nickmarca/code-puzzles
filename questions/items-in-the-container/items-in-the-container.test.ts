import { itemsInTheContainer } from "./items-in-the-container";

describe('itemsInTheContainer', () => {
  const tests = [
    {
      name: 'test A',
      input: { str: '|**|*|*', start: [1, 2], end: [7, 5] },
      output: [3, 0]
    },
  ];

  tests.forEach(({ name, input: { start, end, str }, output }) => {
    it(name, () => {
      expect(itemsInTheContainer(str, start, end)).toEqual(output);
    });
  });
});