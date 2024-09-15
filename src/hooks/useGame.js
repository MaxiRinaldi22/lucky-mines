export function useGame(minesAmount) {
  const array = new Array(25).fill(true);

  let count = 0;
  while (count < minesAmount) {
    const ramdomIndex = Math.floor(Math.random() * 25);
    if (array[ramdomIndex]) {
      array[ramdomIndex] = false;
      count++;
    }
  }
  return array;
}
