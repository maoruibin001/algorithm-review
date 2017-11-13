let binary = require('../src/binary.js');
let expect = require('chai').expect;

describe('二分查找法', function() {
  it('binary([1, 2, 3, 4, 7, 8, 9], 1) return 0)', function() {
    expect(binary([1, 2, 3, 4, 7, 8, 9], 1)).to.equal(0);
  })
});

describe('二分查找法', function() {
  it('binary([1, 2, 3, 4, 7, 8, 9], 9) return 6)', function() {
    expect(binary([1, 2, 3, 4, 7, 8, 9], 9)).to.equal(6);
  })
});

describe('二分查找法', function() {
  it('binary([1, 2, 3, 4, 7, 8, 9], 4) return 3)', function() {
    expect(binary([1, 2, 3, 4, 7, 8, 9], 4)).to.equal(3);
  })
});
describe('二分查找法', function() {
  it('binary([1, 2, 3, 4, 7, 8, 9], 5) return -1)', function() {
    expect(binary([1, 2, 3, 4, 7, 8, 9], 5)).to.equal(-1);
  })
});

describe('二分查找法', function() {
  it('binary([1, 2, 3, 4, 7, 8, 9], -2) return -1)', function() {
    expect(binary([1, 2, 3, 4, 7, 8, 9], -2)).to.equal(-1);
  })
});

describe('二分查找法', function() {
  it('binary([1, 2, 3, 4, 7, 8, 9], 10) return -1)', function() {
    expect(binary([1, 2, 3, 4, 7, 8, 9], 10)).to.equal(-1);
  })
});

describe('二分查找法', function() {
  it('binary([1, 2, 3, 4, 7, 8, 9], 7.7) return -1)', function() {
    expect(binary([1, 2, 3, 4, 7, 8, 9], 7.7)).to.equal(-1);
  })
});

describe('二分查找法', function() {
  it('binary([1], 1) return 0)', function() {
    expect(binary([1], 1)).to.equal(0);
  })
});
describe('二分查找法', function() {
  it('binary([], 1) return -1)', function() {
    expect(binary([], 1)).to.equal(-1);
  })
});