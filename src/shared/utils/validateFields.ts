import { moduleEleven } from './moduleEleven';
import { moduleTen } from './moduleTen';

export const validateField = (
  field: string,
  module: number,
  currencyCode?: number,
) => {
  const toArray = Array.from(field);
  const numberArray = toArray.map(Number);
  const reverseArray = numberArray.reverse();

  if (module === 10 || currencyCode === 6 || currencyCode === 7) {
    moduleTen(reverseArray);
  } else {
    moduleEleven(reverseArray);
  }

  return true;
};

export const validateDigitModuleEleven = (digitableLine: string) => {
  const fieldOne = digitableLine.slice(0, 11);
  const fieldTwo = digitableLine.slice(12, 23);
  const fieldThree = digitableLine.slice(24, 35);
  const fieldFour = digitableLine.slice(36, 47);

  // para verificar o valor da moeda, caso seja 6 ou 7 cai direto aqui
  const currencyCode = Number(digitableLine[2]);

  const module = 11;

  validateField(fieldOne, module, currencyCode);
  validateField(fieldTwo, module, currencyCode);
  validateField(fieldThree, module, currencyCode);
  validateField(fieldFour, module, currencyCode);
};

export const validateDigitModuleTen = (digitableLine: string) => {
  const fieldOne = digitableLine.slice(0, 9);
  const fieldTwo = digitableLine.slice(10, 20);
  const fieldThree = digitableLine.slice(21, 31);

  const module = 10;

  validateField(fieldOne, module);
  validateField(fieldTwo, module);
  validateField(fieldThree, module);
};
