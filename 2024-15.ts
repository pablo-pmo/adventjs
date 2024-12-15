type Category = {
  name: string;
  width: number;
};

function drawTable(data: Array<Record<string, string | number>>): string {
  const newLine: string = "\n";
  const separator: string = "|";

  const categories: Category[] = Object.keys(data[0]).map(
    (key: string): Category => {
      const name: string = key[0].toUpperCase() + key.slice(1);
      let width: number = name.length;

      data.forEach((category: Record<string, string | number>) => {
        if (category[key].toString().length > width) {
          width = category[key].toString().length;
        }
      });
      const category: Category = {
        name,
        width,
      };
      return category;
    }
  );

  let border: string = "+";
  border += categories
    .map(({ width }: Category): string => "-".repeat(width + 2))
    .join("+");
  border += "+" + newLine;

  let output: string = border + separator + " ";
  categories.forEach(({ name, width }: Category) => {
    output += "" + name;
    output += " ".repeat(width - name.length);
    output += " " + separator + " ";
  });
  output = output.slice(0, -1) + newLine + border;

  data.forEach((data: Record<string, string | number>) => {
    output += separator + " ";

    output += Object.values(data)
      .map((value: string | number, i: number): string => {
        const valueAsString: string = "" + value;
        let valueString: string = valueAsString;
        const width: number = categories[i].width - valueAsString.length;
        valueString += " ".repeat(width);
        return valueString;
      })
      .join(" " + separator + " ");
    output += " " + separator + newLine;
  });
  output += border;
  output = output.slice(0, -1);

  return output;
}
