let count = require('../src/count.js');
let expect = require('chai').expect;

describe('计数排序测试', function() {
  it('count([9, 1, 3, 7, 22, 5, 3, 6, 1] return [1, 1, 3, 3, 5, 6, 7, 9, 22])', function() {
    expect(count([9, 1, 3, 7, 22, 5, 3, 6, 1])).to.deep.equal([1, 1, 3, 3, 5, 6, 7, 9, 22]);
  })
});

describe('计数排序测试', function() {
  it('count([22, 1, 3, 7, 9, 5, 3, 6, 1] return [1, 1, 3, 3, 5, 6, 7, 9, 22])', function() {
    expect(count([22, 1, 3, 7, 9, 5, 3, 6, 1])).to.deep.equal([1, 1, 3, 3, 5, 6, 7, 9, 22]);
  })
});

describe('计数排序测试', function() {
  it('count([1, 1, 3, 7, 9, 5, 3, 6, 22] return [1, 1, 3, 3, 5, 6, 7, 9, 22])', function() {
    expect(count([1, 1, 3, 7, 9, 5, 3, 6, 22])).to.deep.equal([1, 1, 3, 3, 5, 6, 7, 9, 22]);
  })
});

describe('计数排序测试', function() {
  it('count([6, 1, 3, 1, 9, 5, 22, 3, 7] return [1, 1, 3, 3, 5, 6, 7, 9, 22])', function() {
    expect(count([6, 1, 3, 1, 9, 5, 22, 3, 7])).to.deep.equal([1, 1, 3, 3, 5, 6, 7, 9, 22]);
  })
});

describe('计数排序测试', function() {
  it('count([1] return [1])', function() {
    expect(count([1])).to.deep.equal([1]);
  })
});