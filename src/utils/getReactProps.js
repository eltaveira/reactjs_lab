export function getReactProps(obj) {
  for (const key of Reflect.ownKeys(obj)) {
    const value = Reflect.get(obj, key);
    Reflect.defineProperty(obj, key, {
      enumerable: true,
      writable: true,
      configurable: true,
      value
    });
    if (key.startsWith('__reactProps$')) {
      return Reflect.get(obj, key);
    }
  }
}
