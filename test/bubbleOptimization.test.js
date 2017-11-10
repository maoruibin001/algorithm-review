let bubble = require('../src/bubbleOptimization.js');
let expect = require('chai').expect;

describe('冒泡排序优化测试', function() {
  it('bubble([3, 1, 4, 2] return [1, 2, 3, 4])', function() {
    expect(bubble([3, 1, 4, 2])).to.deep.equal([1, 2, 3, 4]);
  })
});

describe('冒泡排序优化测试', function() {
  it('bubble([1, 3, 4, 2] return [1, 2, 3, 4])', function() {
    expect(bubble([1, 3, 4, 2])).to.deep.equal([1, 2, 3, 4]);
  })
});

describe('冒泡排序优化测试', function() {
  it('bubble([4, 1, 2, 3] return [1, 2, 3, 4])', function() {
    expect(bubble([4, 1, 2, 3])).to.deep.equal([1, 2, 3, 4]);
  })
});

describe('冒泡排序优化测试', function() {
  it('bubble([4, 3, 2, 1] return [1, 2, 3, 4])', function() {
    expect(bubble([4, 3, 2, 1])).to.deep.equal([1, 2, 3, 4]);
  })
});