export function cloneDeep(value) {
  if (typeof value !== "object" || value === null) return value;

  if (value instanceof Date) {
    return new Date(value);
  }

  let result = Array.isArray(value) ? [] : {};

  for (const key in value) {
    result[key] = cloneDeep(value[key]);
  }

  return result;
}
