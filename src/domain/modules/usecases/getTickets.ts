import { Injectable } from '@nestjs/common';
import { checkDigitableLine } from '../../../shared/utils/checkDigitableLine';
import { Insurance } from '../tickets/types/insurance/insurance';
import { Title } from '../tickets/types/title/title';

@Injectable()
export class GetTicket {
  constructor(
    private readonly title: Title,
    private readonly insurance: Insurance,
  ) {}

  async barCode(ticket: string) {
    checkDigitableLine(ticket);
    if (ticket.length === 47) {
      return this.title.call(ticket, ticket.length);
    } else {
      return this.insurance.call(ticket, ticket.length);
    }
    // const getTicket =
    //   ticket.length === 47
    //     ? this.title.call(ticket, ticket.length)
    //     : this.insurance.call(ticket, ticket.length);

    // return getTicket;
  }
}
