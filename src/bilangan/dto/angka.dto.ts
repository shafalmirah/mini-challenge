import { IsInt, Min, Max } from 'class-validator';

export class BilanganDTO {
  @IsInt()
  @Min(1)
  @Max(100)
  angka: number;
}