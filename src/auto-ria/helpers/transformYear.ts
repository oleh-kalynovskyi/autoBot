export function transformYear(inputNumber: number) {
  const lessBy2 = inputNumber - 2;
  const moreBy2 = inputNumber + 2;
  const currentYear = new Date().getFullYear();
  if (moreBy2 > currentYear) {
    return [lessBy2, currentYear];
  }
  return [lessBy2, moreBy2];
}
