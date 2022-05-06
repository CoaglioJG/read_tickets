import { getAmount } from 'src/shared/utils/getAmount';
import { getBarCode } from 'src/shared/utils/getBarCode';
import { ITicket } from 'src/shared/utils/interface';
import { validateDigitModuleTen } from 'src/shared/utils/validateFields';

export class Insurance {
  async call(tickets: string, size: number) {
    validateDigitModuleTen(tickets);
    const barCode = getBarCode(tickets, size);
    const amount = getAmount(tickets, size);

    const result: ITicket = {
      barCode,
      amount,
    };

    return result;
  }
}
