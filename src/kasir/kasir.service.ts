
import { Injectable, BadRequestException } from '@nestjs/common';
import { CheckoutDto } from './dto/checkout.dto';

@Injectable()
export class KasirService {
  checkout(member: string, metode: string, data: CheckoutDto) {
    member = member.toLowerCase();

    if (!['reguler', 'silver', 'gold'].includes(member)) {
      throw new BadRequestException('Member tidak valid');
    }

    if (!['tunai', 'qris'].includes(metode)) {
      throw new BadRequestException('Metode tidak valid');
    }

    if (
      !data ||
      !Array.isArray(data.items) ||
      data.items.length < 1 ||
      data.items.length > 10
    ) {
      throw new BadRequestException('Items harus berisi 1 sampai 10 barang');
    }

    let subtotal = 0;
    let totalItem = 0;
    const rincian: {
      nama: string;
      harga: number;
      qty: number;
      subtotal: number;
    }[] = [];

    for (let i = 0; i < data.items.length; i++) {
      const item = data.items[i];

      if (!item.nama || item.nama.trim() === '') {
        throw new BadRequestException(
          `Item ke-${i + 1}: nama tidak boleh kosong`
        );
      }

      if (typeof item.harga !== 'number' || !Number.isFinite(item.harga) || item.harga <= 0) {
        throw new BadRequestException(
          `Item ke-${i + 1}: harga harus lebih dari 0`
        );
      }

      if (!Number.isInteger(item.qty) || item.qty <= 0) {
        throw new BadRequestException(
          `Item ke-${i + 1}: qty harus bilangan bulat lebih dari 0`
        );
      }

      const totalHarga = item.harga * item.qty;

      rincian.push({
        nama: item.nama.trim(),
        harga: item.harga,
        qty: item.qty,
        subtotal: totalHarga
      });

      subtotal += totalHarga;
      totalItem += item.qty;
    }

    let persenDiskon = 0;

    if (member === 'silver') persenDiskon = 5;
    if (member === 'gold') persenDiskon = 10;

    const diskon = subtotal * persenDiskon / 100;

    const biayaAdmin =
      metode === 'qris' ? (subtotal - diskon) * 0.01 : 0;

    const total = subtotal - diskon + biayaAdmin;

    return {
      member,
      metode,
      rincian,
      totalItem,
      subtotal,
      diskon,
      biayaAdmin,
      total
    };
  }
}

