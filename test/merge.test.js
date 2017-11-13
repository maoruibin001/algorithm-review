let merge = require('../src/merge.js');
let expect = require('chai').expect;

describe('归并排序测试', function() {
  it('merge([9, 1, 3, 7, 22, 5, 3, 6, 1] return [1, 1, 3, 3, 5, 6, 7, 9, 22])', function() {
    expect(merge([9, 1, 3, 7, 22, 5, 3, 6, 1])).to.deep.equal([1, 1, 3, 3, 5, 6, 7, 9, 22]);
  })
});

describe('归并排序测试', function() {
  it('merge([22, 1, 3, 7, 9, 5, 3, 6, 1] return [1, 1, 3, 3, 5, 6, 7, 9, 22])', function() {
    expect(merge([22, 1, 3, 7, 9, 5, 3, 6, 1])).to.deep.equal([1, 1, 3, 3, 5, 6, 7, 9, 22]);
  })
});

describe('归并排序测试', function() {
  it('merge([1, 1, 3, 7, 9, 5, 3, 6, 22] return [1, 1, 3, 3, 5, 6, 7, 9, 22])', function() {
    expect(merge([1, 1, 3, 7, 9, 5, 3, 6, 22])).to.deep.equal([1, 1, 3, 3, 5, 6, 7, 9, 22]);
  })
});

describe('归并排序测试', function() {
  it('merge([6, 1, 3, 1, 9, 5, 22, 3, 7] return [1, 1, 3, 3, 5, 6, 7, 9, 22])', function() {
    expect(merge([6, 1, 3, 1, 9, 5, 22, 3, 7])).to.deep.equal([1, 1, 3, 3, 5, 6, 7, 9, 22]);
  })
});