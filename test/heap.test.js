let heap = require('../src/heap.js');
let expect = require('chai').expect;

describe('堆排序测试', function() {
  it('heap([9, 1, 3, 7, 22, 5, 3, 6, 1] return [1, 1, 3, 3, 5, 6, 7, 9, 22])', function() {
    expect(heap([9, 1, 3, 7, 22, 5, 3, 6, 1])).to.deep.equal([1, 1, 3, 3, 5, 6, 7, 9, 22]);
  })
});

describe('堆排序测试', function() {
  it('heap([22, 1, 3, 7, 9, 5, 3, 6, 1] return [1, 1, 3, 3, 5, 6, 7, 9, 22])', function() {
    expect(heap([22, 1, 3, 7, 9, 5, 3, 6, 1])).to.deep.equal([1, 1, 3, 3, 5, 6, 7, 9, 22]);
  })
});

describe('堆排序测试', function() {
  it('heap([1, 1, 3, 7, 9, 5, 3, 6, 22] return [1, 1, 3, 3, 5, 6, 7, 9, 22])', function() {
    expect(heap([1, 1, 3, 7, 9, 5, 3, 6, 22])).to.deep.equal([1, 1, 3, 3, 5, 6, 7, 9, 22]);
  })
});

describe('堆排序测试', function() {
  it('heap([6, 1, 3, 1, 9, 5, 22, 3, 7] return [1, 1, 3, 3, 5, 6, 7, 9, 22])', function() {
    expect(heap([6, 1, 3, 1, 9, 5, 22, 3, 7])).to.deep.equal([1, 1, 3, 3, 5, 6, 7, 9, 22]);
  })
});

describe('堆排序测试', function() {
  it('heap([6] return [6])', function() {
    expect(heap([6])).to.deep.equal([6]);
  })
});