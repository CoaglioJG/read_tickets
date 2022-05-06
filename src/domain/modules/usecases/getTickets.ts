import { Injectable } from '@nestjs/common';
import { checkDigitableLine } from 'src/shared/utils/checkDigitableLine';
import { Insurance } from '../tickets/types/insurance/insurance';
import { Title } from '../tickets/types/title/title';

@Injectable()
export class GetTicket {
  constructor(
    private readonly title: Title,
    private readonly insurance: Insurance,
  ) {}

  async call(ticket: string) {
    checkDigitableLine(ticket);
    const getTicket =
      ticket.length === 47
        ? this.title.call(ticket, ticket.length)
        : this.insurance.call(ticket, ticket.length);

    return getTicket;
  }
}
