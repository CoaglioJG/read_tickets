import { Module } from '@nestjs/common';
import { TicketsModule } from './domain/modules/tickets/tickets.module';

@Module({
  imports: [TicketsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
