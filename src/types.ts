export interface BaseNode {
  value: string;
}

export interface BinOpNode {
  left: BaseNode;
  right: BaseNode;
  value: string;
}

export type Node = BinOpNode | BaseNode;

export type Operation = (a: number, b: number) => number;

export enum TokenType {
  PLUS = 'PLUS',
  FLOAT = 'FLOAT',
  INT = 'INT',
  MINUS = 'MINUS',
  MULTIPLY = 'MULTIPLY',
  DIVIDE = 'DIVIDE',
  LPAREN = 'LPAREN',
  RPAREN = 'RPAREN',
  EOF = 'EOF',
  DIGIT = 'DIGIT',
}

export interface Token {
  type: TokenType;
  value: string;
  index: number;
}
