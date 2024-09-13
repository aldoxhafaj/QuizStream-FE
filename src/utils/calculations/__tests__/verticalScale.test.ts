import { verticalScale } from '@quiz-stream/utils/calculations/verticalScale';

describe('vertical scale', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scenarios: [any, number][] = [
    [10, 6.6],
    [12, 7.92],
    [24, 15.84],
    [100, 66],
    [null, 0],
    [undefined, 0],
    [NaN, 0],
    [{}, 0],
    ['string', 0],
    [false, 0],
  ];

  it.each(scenarios)('should vertically scale %s to %s', (size, expected) => {
    expect(verticalScale(size)).toBe(expected);
  });
});
