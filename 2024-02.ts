function createFrame(names: string[]): string {
  let longestLength: number = 0;
  for (let name of names) {
    if (name.length > longestLength) {
      longestLength = name.length;
    }
  }

  let output: string = "*".repeat(longestLength + 4) + "\n";
  names.forEach((name: string) => {
    output += "* ";
    output += name;
    output += " ".repeat(longestLength - name.length);
    output += " *\n";
  });
  output += "*".repeat(longestLength + 4);
  return output;
}
