'use strict'

var assert = require('chai').assert;
import removeDuplicates from "../src/removeDuplicates.js"

describe('suite of utility functions inside removeDuplicates', function () {
  describe('removing array duplicates', function () {
    it('should return unique values', function () {
        let myNums = [1,2,3,1,4,1,2,5,3,4];
        assert.deepEqual([1, 2, 3, 4, 5], removeDuplicates(myNums));
      });
  });
})
