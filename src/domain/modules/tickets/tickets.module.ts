import { Module } from '@nestjs/common';
import { Insurance } from './types/insurance/insurance';
import { Title } from './types/title/title';

@Module({
  imports: [],
  exports: [Title, Insurance],
  providers: [Title, Insurance],
})
export class TicketsModule {}
