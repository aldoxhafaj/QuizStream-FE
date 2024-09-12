import { horizontalScale } from '@quiz-stream/utils/calculations/horizontalScale';

describe('horizontal scale', () => {
  const scenarios: [number, number][] = [
    [10, 8.5],
    [12, 10.2],
    [24, 20.4],
    [100, 85],
  ];
  it.each(scenarios)('should horizontally scale %s to %s', (size, expected) => {
    expect(horizontalScale(size)).toBe(expected);
  });
});
