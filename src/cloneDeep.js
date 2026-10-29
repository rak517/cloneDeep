export function cloneDeep(value) {
  if (typeof value !== "object" || value === null) return value;

  return Object.assign({}, value);
}
