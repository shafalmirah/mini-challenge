import { IsNumber, IsIn } from 'class-validator';
import { Type } from 'class-transformer';

export class SuhuDto {
  @Type(() => Number)
  @IsNumber()
  nilai: number;

  @IsIn(['celsius', 'fahrenheit', 'kelvin'])
  dari: string;

  @IsIn(['celsius', 'fahrenheit', 'kelvin'])
  ke: string;
}