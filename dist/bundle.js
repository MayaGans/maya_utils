(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.mayatest = factory());
})(this, (function () { 'use strict';

  function removeDuplicates(arr) {

    // Accepts an array from which the duplicates
    // will be removed
    if (!Array.isArray(arr)){
      arr = [];
    }

    let theSet = new Set(arr);
    let uniqueArr = [...theSet];

    return uniqueArr
  }

  return removeDuplicates;

}));
