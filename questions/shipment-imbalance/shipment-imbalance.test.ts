import { getTotalImbalance } from './shipment-imbalance';

describe('getTotalImbalance', () => {
  const tests = [
    {
      name: 'test B',
      weight: [3, 2, 1],
      output: 6,
    }
  ];

  tests.forEach(({ name, output, weight }) => {
    it(name, () => { 
      expect(getTotalImbalance(weight)).toBe(output);
    });
  });
});