import { Injectable } from '@nestjs/common';
import { ITicket } from 'src/shared/utils/interface';
import { addDays, getAmount, getBarCode } from 'src/infra/constFunction';
import { validateBarCode } from 'src/shared/utils/validateBarCode';
import { validateDigitModuleEleven } from 'src/shared/utils/validateFields';

@Injectable()
export class Title {
  async call(tickets: string, size: number) {
    validateDigitModuleEleven(tickets);
    const barCode = getBarCode(tickets, size);
    validateBarCode(barCode, size);
    const amount = getAmount(tickets, size);
    const expFactor = barCode.slice(5, 9);
    const baseDate = new Date('10-07-1997');
    const expirationDate = addDays(JSON.stringify(baseDate), Number(expFactor));

    const result: ITicket = {
      barCode,
      amount,
      expirationDate,
    };

    return result;
  }
}
