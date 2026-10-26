import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AccessibilityFeaturesService } from './accessibility-features.service';
import { CreateAccessibilityFeatureDto } from './dto/create-accessibility-feature.dto';

@Controller('accessibility-features')
export class AccessibilityFeaturesController {
  constructor(private readonly featuresService: AccessibilityFeaturesService) {}

  @Post()
  create(@Body() dto: CreateAccessibilityFeatureDto) {
    return this.featuresService.create(dto);
  }

  @Get()
  findAll() {
    return this.featuresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.featuresService.findOne(id);
  }
}