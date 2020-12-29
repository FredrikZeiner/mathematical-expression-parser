import { Lexer } from './lexer/lexer';
import { Parser } from './parser/parser';
import { BinOpNode } from './types';
import { Visitor } from './visitor/visitor';

console.info('Write expression, hit "enter" to evaluate');

process.stdin.on('data', (data) => {
  try {
    const parser = new Parser(new Lexer(data.toString()));
    const res = new Visitor().walk(parser.parse() as BinOpNode);
    console.info(res);
  } catch (error) {
    console.error(error);
  }
});
