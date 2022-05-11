import { Module } from '@nestjs/common';
import { Insurance } from './tickets/types/insurance/insurance';
import { Title } from './tickets/types/title/title';
import { GetTicket } from './usecases/getTickets';

@Module({
  imports: [],
  providers: [GetTicket, Title, Insurance],
  exports: [GetTicket],
})
export class DomainModule {}
