type Inventory = Toy[];

interface Toy {
  name: string;
  quantity: number;
  category: string;
}

interface OrganizedInventory {
  [key: string]: Category;
}

interface Category {
  [key: string]: number;
}

function organizeInventory(inventory: Inventory): OrganizedInventory {
  const output: OrganizedInventory = {};

  inventory.forEach((toy: Toy) => {
    const { name, quantity, category } = toy;

    output[category] ??= {};

    output[category][name] ??= 0;

    output[category][name] += quantity;
  });

  return output;
}
