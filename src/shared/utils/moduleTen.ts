export const moduleTen = (array: number[]) => {
  let count = 2;
  const arraySum = [];

  array.forEach((digit) => {
    const multiply = digit * count;

    arraySum.push(multiply);

    count == 2 ? (count = 1) : count++;
  });

  const sum = arraySum.reduce((partialSum, a) => partialSum + a, 0);
  const rest = sum % 11;
  let DAC = 10 - rest;

  if (rest === 0) {
    return (DAC = 0);
  } else return DAC;
};
