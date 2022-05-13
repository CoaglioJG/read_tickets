import { Injectable } from '@nestjs/common';
import { Ticket } from '../../../../../domain/modules/entities/ticket';
import { getAmount } from '../../../../../shared/utils/getAmount';
import { getBarCode } from '../../../../../shared/utils/getBarCode';
import { getDays } from '../../../../../shared/utils/getDays';
import { validateBarCode } from '../../../../../shared/utils/validateBarCode';
import { validateDigitModuleEleven } from '../../../../../shared/utils/validateFields';

@Injectable()
export class Title {
  async call(tickets: string, size: number) {
    validateDigitModuleEleven(tickets);
    const barCode = getBarCode(tickets, size);
    validateBarCode(barCode, size);
    const amount = getAmount(tickets, size);
    const dueDateFactor = barCode.slice(5, 9);
    const baseDate = '10-07-1997';
    const expirationDate = getDays(baseDate, Number(dueDateFactor));

    const result: Ticket = {
      barCode,
      amount,
      expirationDate,
    };

    return result;
  }
}
