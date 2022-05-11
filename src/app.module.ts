import { Module } from '@nestjs/common';
import { DomainModule } from './domain/modules/domain.module';
import { TicketsModule } from './domain/modules/tickets/tickets.module';
import { PresentationModule } from './presentation/presentation.module';

@Module({
  imports: [TicketsModule, DomainModule, PresentationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
