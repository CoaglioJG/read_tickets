import { Ticket } from 'src/domain/modules/entities/ticket';
import { getAmount } from 'src/shared/utils/getAmount';
import { getBarCode } from 'src/shared/utils/getBarCode';
import { validateDigitModuleTen } from 'src/shared/utils/validateFields';

export class Insurance {
  async call(tickets: string, size: number) {
    validateDigitModuleTen(tickets);
    const barCode = getBarCode(tickets, size);
    const amount = getAmount(tickets, size);

    const result: Ticket = {
      barCode,
      amount,
    };

    return result;
  }
}
