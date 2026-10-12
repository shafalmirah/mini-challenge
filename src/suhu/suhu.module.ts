import { Module } from '@nestjs/common';
import { SuhuController } from './suhu.controller';
import { SuhuService } from './suhu.service';

@Module({
controllers: [SuhuController],
providers: [SuhuService],
})
export class SuhuModule {}
