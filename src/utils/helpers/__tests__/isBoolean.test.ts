import { isBoolean } from '@quiz-stream/utils/helpers';

const scenario: [unknown, boolean][] = [
  [true, true],
  [false, true],
  ['true', false],
  [0, false],
  [null, false],
  [NaN, false],
  [undefined, false],
  [{}, false],
];

describe('isBoolean Guard Utility Function', () => {
  it.each(scenario)('isBoolean(%s) should return %s', (value, expected) => {
    expect(isBoolean(value)).toBe(expected);
  });
});
