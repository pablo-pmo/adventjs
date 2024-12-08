function drawRace(indices: number[], length: number) {
  const lanes: string[] = indices.map(
    (progress: number, index: number): string => {
      const prefix: string = " ".repeat(indices.length - index - 1);

      let lane: string = "~".repeat(length);
      const laneArray: string[] = lane.split("");

      if (progress !== 0) {
        laneArray.splice(progress, 1, "r");
      }

      lane = laneArray.join("");
      const suffix: string = " /" + ++index;

      return prefix + lane + suffix;
    }
  );
  return lanes.join("\n");
}
