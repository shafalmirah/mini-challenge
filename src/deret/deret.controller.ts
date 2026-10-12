
import { Controller, Get, Param, Query, BadRequestException } from '@nestjs/common';

import { DeretService } from './deret.service';

@Controller('deret')
export class DeretController {
  constructor(private deretService: DeretService) { }

  @Get(':jenis')
  buatDeret(
    @Param('jenis') jenis: string,
    @Query('jumlah') jumlah: string,
    @Query('urutan') urutan: string
  ) {
    if (jumlah === undefined) {
      throw new BadRequestException('Jumlah wajib diisi');
    }

    return this.deretService.buatDeret(
      jenis,
      Number(jumlah),
      urutan === undefined ? 'asc' : urutan
    );
  }
}

