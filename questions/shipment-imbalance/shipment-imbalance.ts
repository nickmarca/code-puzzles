/*
 * Complete the 'getTotalImbalance' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY weight as parameter.
 */

export function getTotalImbalance(weight: number[]) {
  const res: number[] = [];
  helper(weight, [], res, 0);
  return res.reduce((prev, curr) => prev + curr, 0);  
}

function helper(
  weight: number[],
  shipment: number[],
  res: number[],
  i: number
) {
  if (i === weight.length) {
    if (!shipment.length) {
      return;
    }

    const max = Math.max(...shipment);
    const min = Math.min(...shipment);

    res.push(Math.abs(max - min))
  } else {
    helper(weight, shipment, res, i + 1);
    helper(weight, [weight[i], ...shipment], res, i + 1);
  }
}