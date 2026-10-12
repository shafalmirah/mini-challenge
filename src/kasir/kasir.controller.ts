
import { Controller, Post, Param, Query, Body, BadRequestException, HttpCode } from '@nestjs/common';

import { KasirService } from './kasir.service';
import { CheckoutDto } from './dto/checkout.dto';

@Controller('kasir')
export class KasirController {
  constructor(private kasirService: KasirService) {}

  @Post('checkout/:member')
  @HttpCode(200)
  checkout(
    @Param('member') member: string,
    @Query('metode') metode: string,
    @Body() data: CheckoutDto
  ) {
    if (metode === undefined || metode.trim() === '') {
      throw new BadRequestException('Metode pembayaran wajib diisi');
    }

    return this.kasirService.checkout(member, metode.toLowerCase(), data);
  }
}

