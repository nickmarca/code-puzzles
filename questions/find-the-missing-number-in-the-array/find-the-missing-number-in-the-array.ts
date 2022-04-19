export function missingNumber(array: number[]) {
  array.sort((a, b) => a - b);
  
  let m: number | undefined = undefined;
  
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] !== array[i] + 1) {
      return array[i] + 1;
    }
  } 
}
// Time complexity: O(nlogn)
// Space complexity: O(1)

export function missingNumber1(array: number[]) {
  let sum = 0;
  let max = -Infinity;
  let min = Infinity;
  
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
    max = Math.max(max, array[i]);
    min = Math.min(min, array[i]);
  }

  let expectedSum = 0;

  for (let i = min; i <= max; i++) {
    expectedSum = expectedSum + i;
  }

  return expectedSum - sum;
}
// Time complexity: O(n)
// Space complexity: O(1)