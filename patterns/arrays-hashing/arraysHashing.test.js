const test = require('node:test');
const assert = require('node:assert/strict');

const groupAnagrams = require('./groupAnagrams');
const longestConsecutive = require('./longestConsecutive');
const productExceptSelf = require('./productExceptSelf');
const subarraySumEqualsK = require('./subarraySumEqualsK');
const twoSum = require('./twoSum');
const validAnagram = require('./validAnagram');

test('twoSum returns matching indices in one pass order', () => {
  assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
  assert.deepEqual(twoSum([3, 3], 6), [0, 1]);
  assert.deepEqual(twoSum([1, 2, 3], 10), []);
});

test('validAnagram compares character frequencies', () => {
  assert.equal(validAnagram('listen', 'silent'), true);
  assert.equal(validAnagram('rat', 'car'), false);
  assert.equal(validAnagram('aacc', 'ccac'), false);
});

test('groupAnagrams groups words by sorted key', () => {
  assert.deepEqual(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']), [
    ['eat', 'tea', 'ate'],
    ['tan', 'nat'],
    ['bat'],
  ]);
});

test('productExceptSelf handles normal input and zeros', () => {
  assert.deepEqual(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]);
  assert.deepEqual(productExceptSelf([-1, 1, 0, -3, 3]), [0, 0, 9, 0, 0]);
});

test('subarraySumEqualsK counts prefix sum matches', () => {
  assert.equal(subarraySumEqualsK([1, 1, 1], 2), 2);
  assert.equal(subarraySumEqualsK([1, -1, 0], 0), 3);
});

test('longestConsecutive starts only at sequence heads', () => {
  assert.equal(longestConsecutive([100, 4, 200, 1, 3, 2]), 4);
  assert.equal(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]), 9);
  assert.equal(longestConsecutive([]), 0);
});
