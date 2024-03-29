export type Indexed<T = any> = {
  [key in string]: T;
};

export const isPlainObject = (value: unknown): value is Indexed => {
  return (
    typeof value === 'object' &&
    value !== null &&
    value.constructor === Object &&
    Object.prototype.toString.call(value) === '[object Object]'
  );
};
