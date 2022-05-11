import { Module } from '@nestjs/common';
import { TicketController } from 'src/presentation/tickets.controller';
import { GetTicket } from '../usecases/getTickets';
import { Insurance } from './types/insurance/insurance';
import { Title } from './types/title/title';
@Module({
  imports: [],
  // controllers: [TicketController],
  exports: [Title, Insurance],
  providers: [Title, Insurance],
})
export class TicketsModule {}
