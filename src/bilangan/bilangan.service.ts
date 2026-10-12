import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class BilanganService {
  getBilangan(angka: number) {
    if (
      Number.isNaN(angka) ||
      !Number.isInteger(angka) ||
      angka < 1 ||
      angka > 100
    ) {
      throw new BadRequestException('Angka tidak valid');
    }

    return {
      angka: angka,
      jenis: angka % 2 === 0 ? 'genap' : 'ganjil',
      kuadrat: angka * angka,
      kelipatanLima: angka % 5 === 0,
    };
  }
}
