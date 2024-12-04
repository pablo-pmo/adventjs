function createXmasTree(height: number, ornament: string): string {
  let tree: string = "";
  const width: number = height * 2 - 1;

  for (let branches = 1; branches <= width; branches += 2) {
    const spaces: number = (width - branches) / 2;

    tree += "_".repeat(spaces);
    tree += ornament.repeat(branches);
    tree += "_".repeat(spaces);
    tree += "\n";
  }

  for (let i = 0; i < 2; i++) {
    tree += "_".repeat((width - 1) / 2);
    tree += "#";
    tree += "_".repeat((width - 1) / 2);
    tree += "\n";
  }

  return tree.slice(0, -1);
}
