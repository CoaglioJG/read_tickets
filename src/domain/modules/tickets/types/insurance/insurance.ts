import { ITicket } from 'src/shared/utils/interface';
import { getAmount, getBarCode } from 'src/infra/constFunction';
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
