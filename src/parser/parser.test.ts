import { expect } from 'chai';

import { Parser } from './parser';
import { Lexer } from '../lexer/lexer';
import { ast1, ast2, ast3, ast4, ast6 } from '../../data/asts';

describe('class Parser', () => {
  it('should produce correct AST for term', () => {
    const query = '1 + 2 + 3';

    const parser = new Parser(new Lexer(query));
    const tree = parser.parse();

    expect(tree).to.deep.equal(ast1);
  });

  it('should produce correct AST for expr', () => {
    const query = '1 * 2 + 3';

    const parser = new Parser(new Lexer(query));
    const tree = parser.parse();

    expect(tree).to.deep.equal(ast2);
  });

  it('should produce correct AST for nested expr', () => {
    const query = '2 * 2 + 3 + 4';

    const parser = new Parser(new Lexer(query));
    const tree = parser.parse();

    expect(tree).to.deep.equal(ast3);
  });

  it('should produce correct AST for nested expr 2', () => {
    const query = '1 * 2 + 3 * 4';

    const parser = new Parser(new Lexer(query));
    const tree = parser.parse();

    expect(tree).to.deep.equal(ast4);
  });

  // it('should produce correct AST for nested expr 3', () => {
  //   const query = '10 / 2 * 3';

  //   const parser = new Parser(new Lexer(query));
  //   const tree = parser.parse();

  //   expect(tree).to.deep.equal(ast6);
  // });
});
