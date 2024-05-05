function sunArray(array) {
  let sum = 0;

  let length = array.length;
  for(let i = 1; i < length; i++) {
    sum += array[i];
  }

  return sum;
}

console.log(sunArray([1, 2, 3, 4, 5]));
console.log(sunArray([11, 43, 23, 75, 12, 32, 13, 64]));

function filterGreaterThanTen(array) {
  let filtered = [];
  let length = array.length;

  for (let i = 0; i < length; i++) {
    if(array[i] > 10) {
      filtered.push(array[i]);
    }
  }
  return filtered;
}

console.log(filterGreaterThanTen([11, 43, 23, 75, 12, 32, 13, 64]));
console.log(filterGreaterThanTen([5, 12, 18, 2, 9, 21]));

