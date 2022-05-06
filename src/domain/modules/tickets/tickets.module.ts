import { Module } from '@nestjs/common';
import { TicketController } from 'src/presentation/tickets.controller';
import { GetTicket } from '../usecases/getTickets';
import { Insurance } from './types/insurance/insurance';
import { Title } from './types/title/title';
@Module({
  imports: [],
  controllers: [TicketController],
  providers: [GetTicket, Title, Insurance],
})
export class TicketsModule {}
