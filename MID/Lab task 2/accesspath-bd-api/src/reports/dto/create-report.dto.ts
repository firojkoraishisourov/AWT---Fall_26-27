import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateReportDto {
  @IsNotEmpty()
  @IsInt()
  buildingId: number;

  @IsNotEmpty()
  @IsString()
  reporterName: string;

  @IsNotEmpty()
  @IsString()
  message: string;

  @IsOptional()
  @IsString()
  photoUrl?: string;
}