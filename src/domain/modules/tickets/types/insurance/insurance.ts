import { Ticket } from '../../../../../domain/modules/entities/ticket';
import { getAmount } from '../../../../../shared/utils/getAmount';
import { getBarCode } from '../../../../../shared/utils/getBarCode';
import { validateDigitModuleTen } from '../../../../../shared/utils/validateFields';

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
