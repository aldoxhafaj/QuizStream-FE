export const isNumber = (value: unknown): value is number => {
  return typeof value === 'number' && !isNaN(value);
};

export const isString = (value: unknown): value is string => {
  return typeof value === 'string';
};

export const isBoolean = (value: unknown): value is boolean => {
  return typeof value === 'boolean';
};

export const isArray = (value: unknown) => {
  return Array.isArray(value);
};
