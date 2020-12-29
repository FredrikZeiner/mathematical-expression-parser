import { expect } from 'chai';
import { Lexer } from './lexer';

describe('class Lexer', () => {
  it('should return expected token', () => {
    const lexer = new Lexer('1 + 2 + 3');
    lexer.next(); // 1
    lexer.next(); // +
    expect(lexer.next()).to.deep.equal({ type: 'INT', value: '2' });
  });
  it('should throw error when encountering unexepcted token', () => {
    const lexer = new Lexer('1 + $ + 3');
    lexer.next(); // 1
    lexer.next(); // +
    expect(lexer.next.bind(lexer)).to.throw();
  });
  it('should skip arbitrary amount of whitespace', () => {
    const lexer = new Lexer('1 +     2 + 3');
    lexer.next(); // 1
    lexer.next(); // +
    expect(lexer.next()).to.deep.equal({ type: 'INT', value: '2' });
  });
  it('should return EOF token when encountering end-of-file', () => {
    const lexer = new Lexer('1 + 2');
    lexer.next(); // 1
    lexer.next(); // +
    lexer.next(); // 2
    expect(lexer.next()).to.deep.equal({ type: 'EOF', value: undefined });
  });
  it('should be able to assemble digits into an INT', () => {
    const lexer = new Lexer('1222 + 2');
    expect(lexer.next()).to.deep.equal({ type: 'INT', value: '1222' });
  });
  it('should be able to tokenize a FLOAT', () => {
    const lexer = new Lexer('12.22 + 2');
    expect(lexer.next()).to.deep.equal({ type: 'FLOAT', value: '12.22' });
  });
  it('should be able to tokenize expression without whitespace', () => {
    const lexer = new Lexer('2+2');
    lexer.next();
    lexer.next();
    expect(lexer.next()).to.deep.equal({ type: 'INT', value: '2' });
  });
});
