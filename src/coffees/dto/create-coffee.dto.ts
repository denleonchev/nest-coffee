import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  @ApiProperty({ description: 'The name of a coffee' })
  @IsString()
  readonly name: string;

  @IsString()
  @ApiProperty({ description: 'The brand of a coffee' })
  readonly brand?: string;

  @ApiProperty({ example: [] })
  @IsString({ each: true })
  readonly flavors: string[];
}
