function prepareGifts(gifts: number[]): number[] {
  return [...new Set(gifts.sort((a: number, b: number): number => a - b))];
}
