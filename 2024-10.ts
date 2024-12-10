function compile(instructions: string[]) {
  const registers: Map<string, number> = new Map();

  for (let i = 0; i < instructions.length; i++) {
    const [instruction, param1, param2]: string[] = instructions[i].split(" ");
    const registerParam1: number = registers.get(param1) ?? 0;

    switch (instruction) {
      case "MOV":
        const value: number = isNaN(+param1) ? registerParam1 : +param1;
        registers.set(param2, value);
        break;

      case "INC":
        registers.set(param1, registerParam1 + 1);
        break;

      case "DEC":
        registers.set(param1, registerParam1 - 1);
        break;

      case "JMP":
        if (registerParam1 === 0) {
          i = +param2 - 1;
        }
        break;
    }
  }

  return registers.get("A");
}
