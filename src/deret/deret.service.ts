import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class DeretService {
    buatDeret(jenis: string, jumlah: number, urutan: string) {

        if (
            jenis !== 'ganjil' &&
            jenis !== 'genap' &&
            jenis !== 'kuadrat'
        ) {
            throw new BadRequestException('Jenis deret tidak valid');
        }

        if (!Number.isInteger(jumlah) || jumlah < 1 || jumlah > 20) {
            throw new BadRequestException('Jumlah harus 1 sampai 20');
        }

        if (urutan !== 'asc' && urutan !== 'desc') {
            throw new BadRequestException('Urutan harus asc atau desc');
        }

        const data = [];
        let total = 0;

        for (let i = 1; i <= jumlah; i++) {
            let angka = 0;

            if (jenis === 'ganjil') {
                angka = 2 * i - 1;
            } else if (jenis === 'genap') {
                angka = 2 * i;
            } else {
                angka = i * i;
            }

            data.push(angka);
            total = total + angka;
        }

        if (urutan === 'desc') {
            data.reverse();
        }

        return {
            jenis: jenis,
            jumlah: jumlah,
            data: data,
            total: total
        };
    }
}

