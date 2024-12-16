/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s: string): string {
  let output: string = "";

  for (let i = 0; i < s.length; i++) {
    if (output.slice(-1).includes(s[i])) {
      output = output.slice(0, -1);
      continue;
    }

    output += s[i];
  }

  return output;
}
