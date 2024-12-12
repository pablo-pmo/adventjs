type OrnamentPrices = {
  [key: string]: number;
};

function calculatePrice(ornaments: string): number | undefined {
  const ornamentPrices: OrnamentPrices = {
    "*": 1,
    o: 5,
    "^": 10,
    "#": 50,
    "@": 100,
  };

  let sum: number = 0;
  let previousValue: number = 0;
  let currentValue;

  for (let i = 0; i < ornaments.length; i++) {
    currentValue = ornamentPrices[ornaments[i]];

    if (currentValue === undefined) return undefined;

    sum += previousValue < currentValue ? -previousValue : previousValue;

    previousValue = currentValue;
  }

  sum += currentValue;
  return sum;
}
