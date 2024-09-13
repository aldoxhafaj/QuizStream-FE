import { horizontalScale } from '@quiz-stream/utils/calculations/horizontalScale';

describe('horizontal scale', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scenarios: [any, number][] = [
    [10, 8.5],
    [12, 10.2],
    [24, 20.4],
    [100, 85],
    [null, 0],
    [undefined, 0],
    [NaN, 0],
    [{}, 0],
    ['string', 0],
    [false, 0],
  ];

  it.each(scenarios)('should horizontally scale %s to %s', (size, expected) => {
    expect(horizontalScale(size)).toBe(expected);
  });
});
