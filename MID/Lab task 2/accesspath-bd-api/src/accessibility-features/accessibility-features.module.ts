import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessibilityFeature } from './accessibility-feature.entity';
import { Building } from '../buildings/building.entity';
import { AccessibilityFeaturesService } from './accessibility-features.service';
import { AccessibilityFeaturesController } from './accessibility-features.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AccessibilityFeature, Building])],
  controllers: [AccessibilityFeaturesController],
  providers: [AccessibilityFeaturesService],
})
export class AccessibilityFeaturesModule {}