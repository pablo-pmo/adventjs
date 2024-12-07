function fixPackages(packages: string): string {
  let output: string = packages;
  const pattern = /\([a-z]+\)/;

  let startingPos: number = output.search(pattern);
  while (startingPos !== -1) {
    const endingPos: number = output.indexOf(")", startingPos);

    output = output.slice(0, startingPos);
    output += packages
      .slice(startingPos + 1, endingPos)
      .split("")
      .reverse()
      .join("");
    output += packages.slice(endingPos + 1);

    startingPos = output.search(pattern);
    packages = output;
  }
  return output;
}
