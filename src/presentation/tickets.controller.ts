import { Controller, Get, Param } from '@nestjs/common';
import { GetTicket } from '../domain/modules/usecases/getTickets';

@Controller('boleto')
export class TicketController {
  constructor(private readonly getTicket: GetTicket) {}

  @Get(':ticket')
  ticket(@Param('ticket') ticket: string) {
    return this.getTicket.barCode(ticket);
  }
}
