// src/common/dto/base.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsOptional } from 'class-validator';

export class BaseDto {
  @ApiProperty({ example: new Date(), required: false })
  @IsOptional()
  @IsDate()
  createdAt?: Date;

  @ApiProperty({ example: new Date(), required: false })
  @IsOptional()
  @IsDate()
  updatedAt?: Date;
}
