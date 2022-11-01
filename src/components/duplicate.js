export function duplicate(array) {
  const objResult = {};
  array.forEach(element => {
    if (objResult[element]) {
      objResult[element] += 1;
    } else {
      objResult[element] = 1;
    }
  });
  return objResult;
}

// console.log(duplicate([1, 1, 1, 2, 2, 5]));
