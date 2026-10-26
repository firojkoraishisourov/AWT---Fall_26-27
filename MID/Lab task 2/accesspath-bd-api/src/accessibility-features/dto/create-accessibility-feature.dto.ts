import { IsBoolean, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateAccessibilityFeatureDto {
  @IsNotEmpty()
  @IsInt()
  buildingId: number;

  @IsNotEmpty()
  @IsString()
  featureType: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsBoolean()
  isAvailable: boolean;
}