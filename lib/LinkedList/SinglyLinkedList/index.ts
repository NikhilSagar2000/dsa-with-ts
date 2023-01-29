import { ListNode } from "../../ListNode";

class SinglyLinkedList<T> {
  private head: ListNode<T> | null;
  private tail: ListNode<T> | null;
  private length: number = 0;

  constructor(value: T) {
    this.head = {
      value,
      next: null,
    };

    this.tail = this.head;
    this.length++;
  }

  private traverseNodeAtIndex(index: number) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode!.next!;
      counter++;
    }

    return currentNode;
  }

  insert(index: number, value: T) {
    if (index <= 0) {
      return this.prepend(value);
    }

    if (index >= this.length) {
      return this.append(value);
    }

    const prevNode = this.traverseNodeAtIndex(index - 1);

    if (!prevNode) {
      return undefined;
    }

    const node = new ListNode(value);
    node.next = prevNode.next;
    prevNode.next = node;

    this.length++;

    return this;
  }

  delete(index: number) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of range.");
    }

    if (index === 0) {
      this.head = this.head!.next!;
      return this;
    }

    const prevNode = this.traverseNodeAtIndex(index - 1)!;
    prevNode.next = prevNode.next!.next;

    this.length--;

    return this;
  }

  prepend(value: T) {
    const node = new ListNode(value);

    node.next = this.head;
    this.head = node;

    this.length++;

    return this;
  }

  append(value: T) {
    const node = new ListNode(value);

    this.tail!.next = node;
    this.tail = node;

    this.length++;

    return this;
  }

  values(): T[] {
    let entries: T[] = [];
    let currentNode = this.head;
    while (currentNode!.next) {
      entries.push(currentNode!.value);
      currentNode = currentNode!.next;
    }
    entries.push(this.tail!.value);

    return entries;
  }

  getValue(index: number) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    const node = this.traverseNodeAtIndex(index);

    return node?.value;
  }
}

export { SinglyLinkedList };
