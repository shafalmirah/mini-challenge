
import { Injectable, BadRequestException } from '@nestjs/common';
import { HitungNilaiDto } from './dto/nilai.dto';

@Injectable()
export class NilaiService {
  hitungNilai(data: HitungNilaiDto) {
    const { nama, tugas, uts, uas } = data;

    if (typeof nama !== 'string' || nama.trim() === '') {
      throw new BadRequestException('Nama tidak boleh kosong');
    }

    if (!Array.isArray(tugas) || tugas.length < 1) {
      throw new BadRequestException('Tugas minimal 1 nilai');
    }

    for (const nilai of tugas) {
      if (
        typeof nilai !== 'number' ||
        !Number.isFinite(nilai) ||
        nilai < 0 ||
        nilai > 100
      ) {
        throw new BadRequestException('Nilai tugas harus 0 sampai 100');
      }
    }

    if (
      typeof uts !== 'number' || !Number.isFinite(uts) || uts < 0 || uts > 100 ||
      typeof uas !== 'number' || !Number.isFinite(uas) || uas < 0 || uas > 100
    ) {
      throw new BadRequestException('Nilai UTS dan UAS harus 0 sampai 100');
    }

    let totalTugas = 0;

    for (const nilai of tugas) {
      totalTugas += nilai;
    }

    const rataTugas = totalTugas / tugas.length;

    const nilaiAkhir = Math.round(
      (0.3 * rataTugas + 0.3 * uts + 0.4 * uas) * 100
    ) / 100;

    let predikat: string;

    if (nilaiAkhir >= 90) {
      predikat = 'A';
    } else if (nilaiAkhir >= 80) {
      predikat = 'B';
    } else if (nilaiAkhir >= 70) {
      predikat = 'C';
    } else {
      predikat = 'D';
    }

    const status = nilaiAkhir >= 75 ? 'Lulus' : 'Remedial';

    return {
      nama: nama.trim(),
      rataTugas,
      nilaiAkhir,
      predikat,
      status
    };
  }
}


