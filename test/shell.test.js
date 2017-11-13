let shell = require('../src/shell.js');
let expect = require('chai').expect;

describe('希尔排序测试', function() {
  it('shell([9, 1, 3, 7, 22, 5, 3, 6, 1] return [1, 1, 3, 3, 5, 6, 7, 9, 22])', function() {
    expect(shell([9, 1, 3, 7, 22, 5, 3, 6, 1])).to.deep.equal([1, 1, 3, 3, 5, 6, 7, 9, 22]);
  })
});

describe('希尔排序测试', function() {
  it('shell([22, 1, 3, 7, 9, 5, 3, 6, 1] return [1, 1, 3, 3, 5, 6, 7, 9, 22])', function() {
    expect(shell([22, 1, 3, 7, 9, 5, 3, 6, 1])).to.deep.equal([1, 1, 3, 3, 5, 6, 7, 9, 22]);
  })
});

describe('希尔排序测试', function() {
  it('shell([1, 1, 3, 7, 9, 5, 3, 6, 22] return [1, 1, 3, 3, 5, 6, 7, 9, 22])', function() {
    expect(shell([1, 1, 3, 7, 9, 5, 3, 6, 22])).to.deep.equal([1, 1, 3, 3, 5, 6, 7, 9, 22]);
  })
});

describe('希尔排序测试', function() {
  it('shell([6, 1, 3, 1, 9, 5, 22, 3, 7] return [1, 1, 3, 3, 5, 6, 7, 9, 22])', function() {
    expect(shell([6, 1, 3, 1, 9, 5, 22, 3, 7])).to.deep.equal([1, 1, 3, 3, 5, 6, 7, 9, 22]);
  })
});