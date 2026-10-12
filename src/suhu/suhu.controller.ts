import { Controller, Get, Query } from '@nestjs/common';
import { SuhuService } from './suhu.service';

@Controller('suhu')
export class SuhuController {
  constructor(private suhuService: SuhuService) {}

  @Get('konversi')
  konversi(
    @Query('nilai') nilai: string,
    @Query('dari') dari: string,
    @Query('ke') ke: string,
  ) {
    if (nilai === undefined || dari === undefined || ke === undefined) {
      return this.suhuService.konversi(
        NaN,
        dari,
        ke,
      );
    }

    return this.suhuService.konversi(
      Number(nilai),
      dari,
      ke,
    );
  }
}
