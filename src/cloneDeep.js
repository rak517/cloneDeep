export function cloneDeep(value) {
  if (typeof value !== "object" || value === null) return value;

  let result = {};

  for (const key in value) {
    result[key] = cloneDeep(value[key]);
  }

  return result;
}
