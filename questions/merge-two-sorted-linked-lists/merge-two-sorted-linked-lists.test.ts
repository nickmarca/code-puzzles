import { LinkedList } from "../../utils/linked-list";
import { mergeTwoSortedLinkedLists, mergeTwoSortedLinkedLists1 } from "./merge-two-sorted-linked-lists";

describe('mergeTwoSortedLinkedLists', () => {
  const tests = [
    {
      name: 'test A',
      input1: LinkedList.from([4, 8, 15, 19]),
      input2: LinkedList.from([7, 9, 10, 16]),
      output: [4, 7, 8, 9, 10, 15, 16, 19],
    },
    {
      name: 'test B',
      input1: LinkedList.from([5, 6, 7]),
      input2: LinkedList.from([1, 2, 3, 4]),
      output: [1, 2, 3, 4, 5, 6, 7],
    },
    {
      name: 'test C',
      input1: LinkedList.from([1, 2, 3]),
      input2: LinkedList.from([4, 5, 6, 7]),
      output: [1, 2, 3, 4, 5, 6, 7],
    }
  ];

  tests.forEach(({ name, input1, input2, output }) => {
    it(name, () => {
      expect(mergeTwoSortedLinkedLists(input1, input2).toArray()).toEqual(output);
      expect(mergeTwoSortedLinkedLists1(input1, input2).toArray()).toEqual(output);
    });
  });
});