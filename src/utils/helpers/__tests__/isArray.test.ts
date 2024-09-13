import { isArray } from '@quiz-stream/utils/helpers';

const scenario: [unknown, boolean][] = [
  [[1, 2, 3], true],
  ['not an array', false],
  [{}, false],
  [null, false],
  [undefined, false],
  [NaN, false],
  [false, false],
  [10, false],
];

describe('isArray Guard Utility Function', () => {
  it.each(scenario)('isArray(%s) should return %s', (value, expected) => {
    expect(isArray(value)).toBe(expected);
  });
});
