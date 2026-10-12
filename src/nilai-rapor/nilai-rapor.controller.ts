
import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { NilaiService } from './nilai-rapor.service';
import { HitungNilaiDto } from './dto/nilai.dto';

@Controller('nilai')
export class NilaiController {
  constructor(private nilaiService: NilaiService) {}

  @Post('hitung')
  @HttpCode(200)
  hitungNilai(@Body() data: HitungNilaiDto) {
    return this.nilaiService.hitungNilai(data);
  }
}
