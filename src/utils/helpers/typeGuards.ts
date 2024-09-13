export const isNumber = <T>(value: T) => {
  return typeof value === 'number' && !isNaN(value);
};

export const isString = <T>(value: T) => {
  return typeof value === 'string';
};

export const isBoolean = <T>(value: T) => {
  return typeof value === 'boolean';
};

export const isArray = <T>(value: T) => {
  return Array.isArray(value);
};
