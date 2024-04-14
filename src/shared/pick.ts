const pick = <T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[]
): Partial<T> => {
  const finalPicked: Partial<T> = {};
  for (const key of keys) {
    if (obj && Object.hasOwnProperty.call(obj, key)) {
      finalPicked[key] = obj[key];
    }
  }
  return finalPicked;
};

export default pick;
