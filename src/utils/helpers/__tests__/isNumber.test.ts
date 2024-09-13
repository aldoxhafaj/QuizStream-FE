import { isNumber } from '@quiz-stream/utils/helpers';

const scenario: [unknown, boolean][] = [
  [42, true],
  ['Not a number', false],
  [NaN, false],
  [null, false],
  [undefined, false],
  [false, false],
  [{}, false],
  [[1, 2, 3], false],
];

describe('isNumber Guard Utility Function', () => {
  it.each(scenario)('isNumber(%s) should return %s', (value, expected) => {
    expect(isNumber(value)).toBe(expected);
  });
});
