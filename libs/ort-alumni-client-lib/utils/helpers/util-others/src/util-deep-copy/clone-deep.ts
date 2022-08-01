export function cloneDeep(obj: unknown) {
  return JSON.parse(JSON.stringify(obj));
}
