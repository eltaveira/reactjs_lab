function mutProps(obj) {
  for (const key of Reflect.ownKeys(obj)) {
    const value = Reflect.get(obj, key);
    Reflect.defineProperty(obj, key, {
      enumerable: true,
      writable: true,
      configurable: true,
      value
    });
    console.log(`[${key}]: ${Reflect.get(obj, key)}`);
  }
}

export { mutProps };
