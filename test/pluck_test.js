'use strict'

var assert = require('chai').assert;
import pluck from "../src/pluck.js"

describe('suite of utility functions inside pluck', function () {
  describe('get all values in array of objects given a key', function () {
    it('should return unique values', function () {
        let myObj = [{name: 'Maya'}, {name: 'Jordan'}];
        assert.deepEqual(['Maya', 'Jordan'], pluck('name', myObj));
      });
  });
})
