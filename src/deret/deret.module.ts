import { Module } from '@nestjs/common';
import { DeretController } from './deret.controller';
import { DeretService } from './deret.service';

@Module({
  controllers: [DeretController],
  providers: [DeretService]
})
export class DeretModule {}

