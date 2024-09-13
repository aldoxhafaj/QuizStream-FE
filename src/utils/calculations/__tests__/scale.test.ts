import { scale } from '@quiz-stream/utils/calculations/scale';

describe('scale', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scenarios: [any, number][] = [
    [10, 5.63],
    [12, 6.75],
    [24, 13.5],
    [100, 56.25],
    [null, 0],
    [undefined, 0],
    [NaN, 0],
    [{}, 0],
    ['string', 0],
    [false, 0],
  ];

  it.each(scenarios)('should scale %s to %s', (size, expected) => {
    expect(scale(size)).toBe(expected);
  });
});
