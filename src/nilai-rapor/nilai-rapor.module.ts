

import { Module } from '@nestjs/common';
import { NilaiController } from './nilai-rapor.controller';
import { NilaiService } from './nilai-rapor.service';

@Module({
  controllers: [NilaiController],
  providers: [NilaiService],
})
export class NilaiRaporModule {}
