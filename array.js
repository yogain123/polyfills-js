// polyfill for 'every'
Array.prototype.every = function(fn) {
  for (const item of this) {
    if (!fn(item)) return false;
  }
  return true;
};


//polyfill for map
Array.prototype.map = function(fn){
    let result = [];
    for (const item of this) {
        result.push(fn(item))
    }
    return result
}

//polyfill for 'some'
Array.prototype.some = function(fn, acc) {
  for (const item of this) {
    if (fn(item)) return true;
  }
  return false;
};

//polyfill for 'reduce' function
Array.prototype.reduce = function(fn, acc = 0) {
  let result;
  for (let i = 0; i < this.length; i++) {
    result = fn(acc, this[i], i, this);
    acc = result;
  }
  return result;
};

//polyfill for 'async forEach' function
Array.prototype.asyncForEach = async function(fn) {
  for (let i = 0; i < this.length; i++) {
    await fn(this[i], i, this);
  }
};

Array.prototype.sort = function(order) {
  //bubble sort
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length - 1; j++) {
      if (order === 1 && this[j] > this[j + 1])
        [this[j], this[j + 1]] = [this[j + 1], this[j]];
      if (order === -1 && this[j] < this[j + 1])
        [this[j], this[j + 1]] = [this[j + 1], this[j]];
    }
  }
  return this;
};

/**
 * let arr = [2, 1, 3, 4, 5, 6, 1];
  arr.sort(1); // 1 for ascending and -1 for descending
  console.log(arr);
  arr.sort(-1);
  console.log(arr);
 * 
 */
