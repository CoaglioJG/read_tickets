import { Injectable } from '@nestjs/common';
import { Ticket } from 'src/domain/modules/entities/ticket';
import { getAmount } from 'src/shared/utils/getAmount';
import { getBarCode } from 'src/shared/utils/getBarCode';
import { getDays } from 'src/shared/utils/getDays';
import { validateBarCode } from 'src/shared/utils/validateBarCode';
import { validateDigitModuleEleven } from 'src/shared/utils/validateFields';

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
