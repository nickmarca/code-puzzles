import { LinkedList } from '../../utils/linked-list';

export function mergeTwoSortedLinkedLists(l1: LinkedList, l2: LinkedList): LinkedList {  
  let head = new LinkedList(Infinity);
  const _head = head;

  let p1: LinkedList | null = l1;
  let p2: LinkedList | null = l2;
  
  while(p1 || p2) {
    if (p1 === null && p2) {
      head.next = new LinkedList(p2.value);
      p2 = p2.next;
      head = head.next; 
    }
    else if (p2 === null && p1) {
      head.next = new LinkedList(p1.value);
      p1 = p1.next;
      head = head.next; 
    }
    else if (p1 && p2 && p1.value < p2.value) {
      head.next = new LinkedList(p1.value);
      p1 = p1.next;
      head = head.next;                 
    } 
    else if (p1 && p2 && p1.value > p2.value) {
      head.next = new LinkedList(p2.value);
      p2 = p2.next;
      head = head.next;
    }
  }

  return _head.next as LinkedList;
}

// Time complexity: O(m + n)
// Space complexity: O(m + n)

export function mergeTwoSortedLinkedLists1(l1: LinkedList, l2: LinkedList): LinkedList {
  let p1: LinkedList | null = l1;
  let p2: LinkedList | null = l2;
  let p2Parent: LinkedList | null = null;  
  let head = p2;

  while (p1) {
    if (!p2) {
      if (p2Parent) {
        p2Parent.next = p1;
      }
      p1 = null; 
    }
    else if (p1.value < p2.value) {
      const p1Next: LinkedList | null = p1.next;
      p1.next = p2;      
      if (p2Parent) {
        p2Parent.next = p1;
      } else {
        head = p1;
      } 
      p2Parent = p1; 
      p1 = p1Next;
    } else {
      p2Parent = p2;
      p2 = p2.next;
    }
  } 
  
  return head;
}

// Time complexity: O(m + n)
// Space complexity: O(1)