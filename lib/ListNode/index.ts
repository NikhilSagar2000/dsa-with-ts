class ListNode<T> {
  value: T;
  next: null | ListNode<T>;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export { ListNode };
