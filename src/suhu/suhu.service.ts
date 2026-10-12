import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class SuhuService {
  konversi(nilai: number, dari: string, ke: string) {
    // Mengecek input
    if (nilai === undefined || dari === undefined || ke === undefined) {
      throw new BadRequestException('Semua query harus diisi');
    }

    const satuan = ['celsius', 'fahrenheit', 'kelvin'];

    if (isNaN(nilai) || !isFinite(nilai)) {
      throw new BadRequestException('Nilai harus berupa angka');
    }

    if (!satuan.includes(dari) || !satuan.includes(ke)) {
      throw new BadRequestException('Satuan tidak valid');
    }

    if (dari === ke) {
      throw new BadRequestException('Satuan tidak boleh sama');
    }

    if (dari === 'kelvin' && nilai < 0) {
      throw new BadRequestException('Kelvin tidak boleh kurang dari 0');
    }

    // Mengubah suhu asal menjadi Celsius
    let celsius = nilai;

    if (dari === 'fahrenheit') {
      celsius = (nilai - 32) * 5 / 9;
    } else if (dari === 'kelvin') {
      celsius = nilai - 273.15;
    }

    // Mengubah Celsius ke satuan tujuan
    let hasil = celsius;

    if (ke === 'fahrenheit') {
      hasil = celsius * 9 / 5 + 32;
    } else if (ke === 'kelvin') {
      hasil = celsius + 273.15;
    }

    // Membulatkan hasil menjadi maksimal 2 angka desimal
    hasil = Math.round(hasil * 100) / 100;

    return {
      nilaiAsal: nilai,
      satuanAsal: dari,
      hasil: hasil,
      satuanHasil: ke,
    };
  }
}
