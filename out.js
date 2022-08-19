(() => {
  // src/removeDuplicates.js
  function removeDuplicates(arr) {
    if (!Array.isArray(arr)) {
      arr = [];
    }
    let theSet = new Set(arr);
    let uniqueArr = [...theSet];
    return uniqueArr;
  }

  // src/pluck.js
  function pluck(key, array) {
    return array.reduce((values, current) => {
      values.push(current[key]);
      return values;
    }, []);
  }
})();
