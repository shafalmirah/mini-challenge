
import { Module } from '@nestjs/common';
import { BilanganController } from './bilangan.controller';
import { BilanganService } from './bilangan.service';

@Module({
  controllers: [BilanganController],
  providers: [BilanganService],
})
export class BilanganModule {}

