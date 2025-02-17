//votre code ici

function printNumbers(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    result = result + i + " ";
  }
  return result.trim();
}

export default printNumbers;
