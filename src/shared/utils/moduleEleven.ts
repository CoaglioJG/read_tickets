export const moduleEleven = (array: number[]) => {
  let count = 2;
  const arraySum = [];

  array.forEach((digit) => {
    const multiply = digit * count;

    arraySum.push(multiply);

    count == 9 ? (count = 2) : count++;
  });

  const sum = arraySum.reduce((partialSum, a) => partialSum + a, 0);
  const rest = sum % 11;
  let DV = 11 - rest;

  if (DV === 0 || DV === 10 || DV === 11) {
    return (DV = 1);
  } else return DV;
};
