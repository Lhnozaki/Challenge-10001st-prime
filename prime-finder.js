module.exports = function(n) {
  // do work here
  let count = 1;
  let prime = 2;
  let start = 3;

  function findPrime(number) {
    for (let x = 2; x < number; x++) {
      if (number % x === 0) {
        return false;
      }
    }
    return true;
  }

  while (count !== n) {
    if (findPrime(start) === true) {
      prime = start;
      count++;
      start++;
    } else {
      start++;
    }
  }

  return prime;
};
