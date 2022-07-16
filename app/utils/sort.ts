const sort =
  <T>(field: keyof T) =>
  (a: T, b: T) => {
    if (a[field] > b[field]) return 1;
    if (a[field] < b[field]) return -1;

    return 0;
  };

export { sort };
