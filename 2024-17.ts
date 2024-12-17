function detectBombs(grid: boolean[][]): number[][] {
  return grid.map((line: boolean[], row: number) =>
    line.map((tile: boolean, column: number) => {
      const rows: number[] = [row];
      if (row - 1 >= 0) {
        rows.push(row - 1);
      }
      if (row + 1 < grid.length) {
        rows.push(row + 1);
      }

      const columns: number[] = [column];
      if (column - 1 >= 0) {
        columns.push(column - 1);
      }
      if (column + 1 < line.length) {
        columns.push(column + 1);
      }

      let count: number = 0;

      rows.forEach((row: number) => {
        columns.forEach((column: number) => {
          count += +grid[row][column];
        });
      });

      count -= +tile;

      return count;
    })
  );
}
