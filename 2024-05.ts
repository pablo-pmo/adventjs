type SingleShoeInventory = {
  [key: number]: Kind[];
};

type Kind = "I" | "R";

type Shoe = {
  type: Kind;
  size: number;
};

function organizeShoes(shoes: Shoe[]): number[] {
  const unmatchedInventory: SingleShoeInventory = {};
  const pairs: number[] = [];

  shoes.forEach((shoe: Shoe) => {
    const { size, type } = shoe;
    unmatchedInventory[size] ??= [];
    const unmatched: Kind[] = unmatchedInventory[size];

    const matchingShoe: number = unmatched.findIndex(
      (shoe: Kind): boolean => shoe.localeCompare(type) !== 0
    );

    if (matchingShoe === -1) {
      return unmatched.push(type);
    }

    unmatched.splice(matchingShoe, 1);
    return pairs.push(size);
  });

  return pairs;
}
