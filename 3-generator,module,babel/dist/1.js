'use strict';

var fn = function fn() {
  var a = 1,
      b = 3;

  console.log(a, b);
};
fn();

var set = new Set(['wang', 'dong']);
console.log(set.has('wang'), 111);