import { BaseNode, Node, TokenType, Token } from '../types';
import { Lexer } from '../lexer/lexer';

export class Parser {
  #lexer: Lexer;
  #currentToken: Token;

  constructor(lexer: Lexer) {
    this.#lexer = lexer;
    this.#currentToken = this.#lexer.next();
  }

  public parse(): Node {
    const ast = this.expr();
    return ast;
  }

  private factor(): BaseNode {
    const { value, type } = this.#currentToken;
    if (!this.isFactor(type)) throw new SyntaxError();
    this.advance();
    return { value };
  }

  private term(): Node {
    return this.binOp(this.factor.bind(this), this.isTerm.bind(this));
  }

  private expr(): Node {
    return this.binOp(this.term.bind(this), this.isExpression.bind(this));
  }

  private binOp(func: () => Node, isType: (p: TokenType) => boolean) {
    let left = func();

    while (isType(this.#currentToken.type)) {
      const opToken = this.#currentToken.value;
      this.advance();
      left = { left, right: func(), value: opToken };
    }

    return left;
  }

  private advance() {
    const nextToken = this.#lexer.next();
    if (nextToken.type !== TokenType.EOF) {
      this.#currentToken = nextToken;
    }
  }

  private isFactor(type: TokenType) {
    return type === TokenType.FLOAT || type === TokenType.INT;
  }

  private isTerm(type: TokenType) {
    return type === TokenType.MULTIPLY || type === TokenType.DIVIDE;
  }

  private isExpression(type: TokenType) {
    return type === TokenType.PLUS || type === TokenType.MINUS;
  }
}
