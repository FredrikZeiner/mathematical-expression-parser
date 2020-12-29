import { expect } from 'chai';
import { ast1, ast2, ast3, ast4, ast5, ast6, ast7 } from '../../data/asts';
import { Interpreter } from './interpreter';

describe('class Interpreter', () => {
  it('should evaluate 1 + 2 + 3 as 6', () => {
    const interpreter = new Interpreter();
    expect(interpreter.calculate(ast1)).to.equal(6);
  });

  it('should evaluate 1 * 2 + 3 as 5', () => {
    const interpreter = new Interpreter();
    expect(interpreter.calculate(ast2)).to.equal(5);
  });

  it('should evaluate 2 * 2 + 3 + 4 as 11', () => {
    const interpreter = new Interpreter();
    expect(interpreter.calculate(ast3)).to.equal(11);
  });

  it('should evaluate 1 * 2 + 3 * 4 as 14', () => {
    const interpreter = new Interpreter();
    expect(interpreter.calculate(ast4)).to.equal(14);
  });

  it('should evaluate 10 / 2 as 5', () => {
    const interpreter = new Interpreter();
    expect(interpreter.calculate(ast5)).to.equal(5);
  });

  it('should evaluate 10 / 2 * 3 as 15', () => {
    const interpreter = new Interpreter();
    expect(interpreter.calculate(ast6)).to.equal(15);
  });

  it('should evaluate 1 as 1', () => {
    const interpreter = new Interpreter();
    expect(interpreter.calculate({ value: '1' })).to.equal(1);
  });

  it('should evaluate 4 - 1 as 3', () => {
    const interpreter = new Interpreter();
    expect(interpreter.calculate(ast7)).to.equal(3);
  });
});
