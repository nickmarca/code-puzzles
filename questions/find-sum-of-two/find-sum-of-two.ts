export function findSumOfTwo(array: number[], target: number) {
  array.sort((a, b) => a - b);
  
  let pL = 0;
  let pR = array.length - 1;

  while (pL < pR) {
    if (array[pL] + array[pR] > target) {
      pR--;
    } else if (array[pL] + array[pR] < target) {
      pL++;
    } else {
      return true;
    }
  }

  return false;
}

// Time complexity: O(nlogn)
// Space complexity: O(1)

export function findSumOfTwo1(array: number[], target: number) {
  const hash = new Map<number, number>();

  for (let i = 0; i < array.length; i++) {
    hash.set(array[i], array[i]);
  }

  for (let i = 0; i < array.length; i++) {
    const p = hash.get(array[i]) ?? Infinity;
    const q = target - p;

    if (hash.has(q) && q !== p) {
      return true; 
    }
  } 

  return false;
}

// Time complexity: O(n);
// Space complexity: O(n);  
