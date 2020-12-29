import { BinOpNode, Node, Operation } from '../types';

export class Interpreter {
  #operations: { [key: string]: Operation } = {
    '+': (a: number, b: number) => a + b,
    '-': (a: number, b: number) => a - b,
    '*': (a: number, b: number) => a * b,
    '/': (a: number, b: number) => a / b,
  };

  walk(node: Node): number {
    const isNumber = !Number.isNaN(Number(node.value));
    if (isNumber) return Number(node.value);
    let operation = this.#operations[node.value];
    let right = this.getNumber((node as BinOpNode).right);
    let left = this.getNumber((node as BinOpNode).left);
    return operation(left, right);
  }

  getNumber(node: Node): number {
    const isNumber = !Number.isNaN(Number(node.value));
    if (isNumber) return Number(node.value);
    return Number(this.walk(node as BinOpNode));
  }
}
