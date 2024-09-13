export function useGame(falseAmount) {
  const array = new Array(25).fill(true);

  let count = 0;
  while (count < falseAmount) {
    const ramdomIndex = Math.floor(Math.random() * 25);
    if (array[ramdomIndex]) {
      array[ramdomIndex] = false;
      count++;
    }
  }
  return array;
}
