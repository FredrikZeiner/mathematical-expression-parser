import { Token, TokenType } from '../types';

export class Lexer {
  #cursor: number = 0;
  #currentChar: string = '';
  #query: string;
  #validChars: { [key: string]: TokenType } = {
    '+': TokenType.PLUS,
    '-': TokenType.MINUS,
    '/': TokenType.DIVIDE,
    '*': TokenType.MULTIPLY,
    ')': TokenType.RPAREN,
    '(': TokenType.LPAREN,
    '0': TokenType.DIGIT,
    '1': TokenType.DIGIT,
    '2': TokenType.DIGIT,
    '3': TokenType.DIGIT,
    '4': TokenType.DIGIT,
    '5': TokenType.DIGIT,
    '6': TokenType.DIGIT,
    '7': TokenType.DIGIT,
    '8': TokenType.DIGIT,
    '9': TokenType.DIGIT,
  };

  constructor(query: string) {
    this.#query = query;
    this.advance();
  }

  public next(): Token {
    while (this.#currentChar === ' ') {
      this.advance();
    }

    const type = this.#validChars[this.#currentChar];

    if (type === TokenType.DIGIT) {
      const token = this.assembleDigits();
      this.advance();
      return token;
    } else if (type) {
      const token = this.createToken(type, this.#currentChar);
      this.advance();
      return token;
    } else if (this.#cursor > this.#query.length) {
      return this.createToken(TokenType.EOF, this.#currentChar);
    } else {
      throw new SyntaxError(`Unexpected token ${this.#currentChar}`);
    }
  }

  private advance(): void {
    if (this.#cursor <= this.#query.length) {
      this.#currentChar = this.#query[this.#cursor];
      this.#cursor++;
    }
  }

  private createToken(type: TokenType, value: string): Token {
    return {
      type,
      value,
    };
  }

  private assembleDigits(): Token {
    let digits = '';
    let radixPoints = 0;

    while (
      this.#validChars[this.#currentChar] === TokenType.DIGIT ||
      this.#currentChar === '.'
    ) {
      if (radixPoints > 1) {
        throw new SyntaxError(`Floats can only contain a single radix`);
      }
      if (this.#currentChar === '.') {
        radixPoints++;
        digits += this.#currentChar;
      } else {
        digits += this.#currentChar;
      }
      this.advance();
    }
    return radixPoints === 1
      ? this.createToken(TokenType.FLOAT, digits)
      : this.createToken(TokenType.INT, digits);
  }
}
