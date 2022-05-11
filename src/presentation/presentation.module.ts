import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/modules/domain.module';
import { TicketController } from './tickets.controller';

@Module({
  imports: [DomainModule],
  providers: [],
  controllers: [TicketController],
})
export class PresentationModule {}
