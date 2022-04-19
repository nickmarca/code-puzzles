import { getNumberOfGroups } from './gifting-groups';

describe('getNumberOfGroups', () => {
  const tests = [
    {
      name: 'test A',
      input: [
        [1, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 1],
      ],
      output: 2,
    },
    {
      name: 'test B',
      input: [
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
      ],
      output: 4,
    },
    {
      name: 'test C',
      input: [
        [1, 0, 0, 1],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [1, 0, 0, 1],
      ],
      output: 3,
    },
    {
      name: 'test D',
      input: [
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ],
      output: 1,
    },
    {
      name: 'test D',
      input: [
        [1, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 1, 1],
        [0, 0, 1, 1],
      ],
      output: 1,
    },
    {
      name: 'test E',
      input: [
        [1, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 1],
      ],
      output: 2,
    }
  ];

  tests.forEach(({ name, input, output }) => {
    it(name, () => {
      expect(getNumberOfGroups(input)).toEqual(output);
    });
  });
});