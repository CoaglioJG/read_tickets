import GenericError from './genericError';
import { moduleEleven } from './moduleEleven';
import { moduleTen } from './moduleTen';

export const validateBarCode = (code: string, type: number) => {
  let verificationDigit: any;

  if (type === 47) {
    const barCodeVerification = Number(code[4]);

    const barCode = code.slice(0, 4) + code.slice(5, 44);
    const transformArray = Array.from(barCode);
    const transformArrayNumber = transformArray.map(Number);
    const reverseArray = transformArrayNumber.reverse();
    verificationDigit = moduleEleven(reverseArray);

    if (verificationDigit !== Number(barCodeVerification)) {
      throw new GenericError(
        'Invalid bar code verification digit',
        400,
        'Bar code verification digit error',
      );
    }
  } else {
    const barCodeVerification = code[3];

    const barCode = code.slice(0, 3) + code.slice(4, 44);
    const transformArray = Array.from(barCode);
    const transformArrayNumber = transformArray.map(Number);
    const reverseArray = transformArrayNumber.reverse();
    verificationDigit = moduleTen(reverseArray);

    if (verificationDigit !== barCodeVerification) {
      throw new GenericError(
        'Invalid bar code verification digit',
        400,
        'Bar code verification digit error',
      );
    }
  }

  return true;
};
