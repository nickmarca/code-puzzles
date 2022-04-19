export class LinkedList {
  next: LinkedList | null = null;
  value: number;

  constructor(value: number) {
    this.value = value;
  }
  
  static from (array: number[]) {
    let head = new LinkedList(array[0]);
    let current = head;
    
    array.forEach((value, index) => {
      if (index === 0) {
        return;
      }

      let next = new LinkedList(value);
      current.next = next;
      current = next;    
    });

    return head;
  }

  toArray() {
    let current: LinkedList | null = this;
    let array: number[] = [];
    
    while (current !== null) {
      array.push(current.value);
      current = current.next;
    }

    return array;
  }

  toString() {
    let current: LinkedList | null = this;
    let str = '';
    
    while (current !== null) {
      str = str + `-> ${current.value} `;
      current = current.next;
    }

    return str.trim();
  }
}