import { isString } from '@quiz-stream/utils/helpers';

const scenario: [unknown, boolean][] = [
  ['hello', true],
  [123, false],
  [NaN, false],
  [null, false],
  [undefined, false],
  [true, false],
  [{}, false],
];

describe('isString Guard Utility Function', () => {
  it.each(scenario)('isString(%s) should return %s', (value, expected) => {
    expect(isString(value)).toBe(expected);
  });
});
