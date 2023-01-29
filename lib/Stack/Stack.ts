import cloneDeep from "lodash.clonedeep";

class Stack<T> {
  private stack: T[];

  constructor(initialValue?: T[]) {
    this.stack = initialValue || [];
  }

  isEmpty(): boolean {
    return this.stack.length === 0;
  }

  size(): number {
    return this.stack.length;
  }

  push(value: T) {
    this.stack.push(value);
    return this;
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length];
  }

  peekLast() {
    return this.stack[0];
  }

  clear() {
    this.stack = [];
    return this;
  }

  getAsArray(): T[] {
    return cloneDeep(this.stack);
  }
}

export { Stack };
