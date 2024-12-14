function minMovesToStables(reindeer: number[], stables: number[]): number {
  const sortNumbers = (a: number, b: number): number => a - b;

  reindeer.sort(sortNumbers);
  stables.sort(sortNumbers);

  let sum: number = 0;
  for (let i = 0; i < reindeer.length; i++) {
    sum += Math.abs(reindeer[i] - stables[i]);
  }
  return sum;
}
