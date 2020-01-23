// polyfill for 'every'
Array.prototype.every = function(fn) {
  for (const item of this) {
    if (!fn(item)) return false;
  }
  return true;
};

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
