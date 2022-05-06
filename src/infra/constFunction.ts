export const getBarCode = (digitableLine: string, type: number) => {
  let barCode;
  if (type === 47) {
    barCode =
      digitableLine.slice(0, 4) +
      digitableLine[32] +
      digitableLine.slice(33, 47) +
      digitableLine.slice(4, 9) +
      digitableLine.slice(10, 20) +
      digitableLine.slice(21, 31);
  } else {
    barCode =
      digitableLine.slice(0, 11) +
      digitableLine.slice(12, 23) +
      digitableLine.slice(24, 35) +
      digitableLine.slice(36, 47);
  }

  return barCode;
};

export const getAmount = (value: string, type: number) => {
  let slicedValue;

  if (type === 47) {
    slicedValue = value.slice(38, 47);
  } else {
    slicedValue = value.slice(4, 15);
  }

  const parsedValue = parseInt(slicedValue, 10);

  return (parsedValue / 100).toFixed(2);
};

export const addDays = (date: string, days: number) => {
  const splitDate = date.split('T');
  const slicedDate = splitDate[0].slice(1, 11);

  const result = new Date(slicedDate);

  result.setDate(result.getDate() + days);

  const stringifiedResult = JSON.stringify(result);

  const splitResult = stringifiedResult.split('T');

  return splitResult[0].slice(1, 11);
};
