import { Controller, Get, Param } from '@nestjs/common';
import { BilanganService } from './bilangan.service';


@Controller('bilangan')
export class BilanganController {
  constructor(private readonly bilanganService: BilanganService) { }

@Get(':angka')
  getBilangan(@Param('angka') angka: string) {
    return this.bilanganService.getBilangan(Number(angka));
  }
}
