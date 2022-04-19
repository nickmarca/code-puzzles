export function itemsInTheContainer (str: string, startIndices: number[], endIndices: number[]) {
  let stars: number[] = [];

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) === 42) {
      const previous = i > 0 ? stars[i - 1] : 0;
      stars[i] = previous + 1;
    } else {
      stars[i] = i > 0 ? stars[i - 1] : 0;
    }
  }

  /* -- end set starts */

  let closestLeftPipes: number[] = [];
  
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) === 124) {
      closestLeftPipes[i] = i;
    } else {
      closestLeftPipes[i] = i > 0 ? closestLeftPipes[i - 1] : -1;
    }
  }

  /* end set closestLeftPipe */
 
  let closestRightPipes: number[] = [];

  for (let i = str.length - 1; i >= 0; i--) {
   if (str.charCodeAt(i) === 124) {
     closestRightPipes[i] = i;
   } else {
    closestRightPipes[i] = i < (str.length - 1) ? closestRightPipes[i + 1] : -1;
   }
  }

  /* end set closestRightPipe */

  const res = [];
 
  for (let i = 0; i < endIndices.length; i++) {
    const start = startIndices[i];
    const end = endIndices[i];

    const startingPipe = closestRightPipes[start - 1];
    const endingPipe = closestLeftPipes[end - 1];   
    
    if (closestLeftPipes[closestLeftPipes.length - 1] === -1) {
      res.push(0);
    } else if(startingPipe < 0) {
      res.push(0);
    }
    else if (startingPipe >= endingPipe) {
      res.push(0);
    } else {
      res.push(stars[endingPipe] - stars[startingPipe]);
    }
  }

  return res;
}