Function.prototype.bind = function(data) {
  return (...rest) => {
    return this.apply(data, rest);
  };
};

//polyfill for 'call'
Function.prototype.call = function(data, ...rest) {
  return this.apply(data, rest);
};
