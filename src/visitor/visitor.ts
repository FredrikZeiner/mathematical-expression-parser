import { BinOpNode, Node, Operation } from '../types';

export class Visitor {
  #operations: { [key: string]: Operation } = {
    '+': (a: number, b: number) => a + b,
    '-': (a: number, b: number) => a - b,
    '*': (a: number, b: number) => a * b,
    '/': (a: number, b: number) => a / b,
  };

  walk(node: BinOpNode): number {
    let operation = this.#operations[node.value];
    let right = this.getNumber(node.right);
    let left = this.getNumber(node.left);
    return operation(left, right);
  }

  getNumber(node: Node): number {
    const isNumber = !Number.isNaN(Number(node.value));
    if (isNumber) return Number(node.value);
    return Number(this.walk(node as BinOpNode));
  }
}
