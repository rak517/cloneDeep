export function cloneDeep(value) {
  if (typeof value !== "object" || value === null) return value;

  if (value instanceof Date) {
    return new Date(value);
  }

  if (value instanceof Map) {
    const result = new Map();
    for (const [k, v] of value) {
      result.set(cloneDeep(k), cloneDeep(v));
    }

    return result;
  }

  if (value instanceof Set) {
    const result = new Set();
    for (const v of value) {
      result.add(cloneDeep(v));
    }

    return result;
  }

  let result = Array.isArray(value) ? [] : {};

  for (const key in value) {
    result[key] = cloneDeep(value[key]);
  }

  return result;
}
