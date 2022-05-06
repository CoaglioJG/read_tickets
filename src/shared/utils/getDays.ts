export const getDays = (date: string, days: number) => {
  const resultDate = new Date(date);

  resultDate.setDate(resultDate.getDate() + days);

  const resultDateString = JSON.stringify(resultDate);

  const splitResultDate = resultDateString.split('T');

  return splitResultDate[0].slice(1, 11);
};
