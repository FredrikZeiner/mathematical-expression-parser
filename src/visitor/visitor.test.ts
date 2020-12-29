import { expect } from 'chai';
import { ast1, ast2, ast3, ast4, ast5, ast6, ast7 } from '../../data/asts';
import { Visitor } from './visitor';

describe('class Visitor', () => {
  it('should evaluate 1 + 2 + 3 as 6', () => {
    const visitor = new Visitor();
    expect(visitor.walk(ast1)).to.equal(6);
  });

  it('should evaluate 1 * 2 + 3 as 5', () => {
    const visitor = new Visitor();
    expect(visitor.walk(ast2)).to.equal(5);
  });

  it('should evaluate 2 * 2 + 3 + 4 as 11', () => {
    const visitor = new Visitor();
    expect(visitor.walk(ast3)).to.equal(11);
  });

  it('should evaluate 1 * 2 + 3 * 4 as 14', () => {
    const visitor = new Visitor();
    expect(visitor.walk(ast4)).to.equal(14);
  });

  it('should evaluate 10 / 2 as 5', () => {
    const visitor = new Visitor();
    expect(visitor.walk(ast5)).to.equal(5);
  });

  it('should evaluate 10 / 2 * 3 as 15', () => {
    const visitor = new Visitor();
    expect(visitor.walk(ast6)).to.equal(15);
  });

  it('should evaluate 1 as 1', () => {
    const visitor = new Visitor();
    expect(visitor.walk({ value: '1' })).to.equal(1);
  });

  it('should evaluate 4 - 1 as 3', () => {
    const visitor = new Visitor();
    expect(visitor.walk(ast7)).to.equal(3);
  });
});
