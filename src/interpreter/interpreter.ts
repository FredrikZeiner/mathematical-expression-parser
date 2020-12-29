import { BinOpNode, Node, Operation } from '../types';

export class Interpreter {
  #operations: { [key: string]: Operation } = {
    '+': (a: number, b: number) => a + b,
    '-': (a: number, b: number) => a - b,
    '*': (a: number, b: number) => a * b,
    '/': (a: number, b: number) => a / b,
  };

  calculate(node: Node): number {
    const isNumber = !Number.isNaN(Number(node.value));
    if (isNumber) return Number(node.value);
    let operation = this.#operations[node.value];
    let left = this.calculate((node as BinOpNode).left);
    let right = this.calculate((node as BinOpNode).right);
    return operation(left, right);
  }
}
