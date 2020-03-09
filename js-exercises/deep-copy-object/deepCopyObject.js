const deepCopyObject = objToCopy => {
  if (typeof objToCopy !== 'object' || objToCopy === null) {
    return objToCopy;
  }

  if (objToCopy instanceof Date) {
    return new Date(objToCopy.getTime());
  }

  if (objToCopy instanceof Array) {
    return objToCopy.reduce((arr, item, i) => {
      arr[i] = deepCopyObject(item);
      return arr;
    }, []);
  }

  if (objToCopy instanceof Object) {
    return Object.keys(objToCopy).reduce((newObj, key) => {
      newObj[key] = deepCopyObject(objToCopy[key]);
      return newObj;
    }, {});
  }
  return objToCopy;
};

export { deepCopyObject };
