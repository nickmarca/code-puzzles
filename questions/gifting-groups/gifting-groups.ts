export function getNumberOfGroups(related: number[][]) {
  let count = 0;
  let visited: boolean[] = Array.from({ length: related.length }, () => false);
   
  for (let i = 0; i < related.length; i++) {
    if (!visited[i]) {
      count++;
      dps(i, related, visited);
    }
  }
  
  return count;
}

function dps(i: number, related: number[][], visited: boolean[]) {
  if (visited[i]) {
    return;
  };
  
  visited[i] = true;
  const relation = related[i];
  
  for (let j = 0; j < relation.length; j++) {
    if (relation[j] === 1 && !visited[j]) {
      dps(j, related, visited);
    }
  }
}