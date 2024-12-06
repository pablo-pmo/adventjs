function inBox(box: string[]): boolean {
  const present: string = "*";

  if (box.splice(0, 1).includes(present)) return false;
  if (box.splice(-1, 1).includes(present)) return false;

  const invalidPositions: number[] = [-1, 0, box[0].length - 1];

  return box.some(
    (line: string): boolean => !invalidPositions.includes(line.indexOf(present))
  );
}
