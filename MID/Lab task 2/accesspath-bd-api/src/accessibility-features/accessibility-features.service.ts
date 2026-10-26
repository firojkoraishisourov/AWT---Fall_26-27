import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccessibilityFeature } from './accessibility-feature.entity';
import { CreateAccessibilityFeatureDto } from './dto/create-accessibility-feature.dto';
import { Building } from '../buildings/building.entity';

@Injectable()
export class AccessibilityFeaturesService {
  constructor(
    @InjectRepository(AccessibilityFeature)
    private featureRepository: Repository<AccessibilityFeature>,
    @InjectRepository(Building)
    private buildingRepository: Repository<Building>,
  ) {}

  async create(dto: CreateAccessibilityFeatureDto) {
    // make sure the building exists before saving
    const building = await this.buildingRepository.findOneBy({ id: dto.buildingId });
    if (!building) {
      throw new NotFoundException(`Building with id ${dto.buildingId} not found`);
    }
    const feature = this.featureRepository.create(dto);
    return this.featureRepository.save(feature);
  }

  findAll() {
    return this.featureRepository.find();
  }

  async findOne(id: number) {
    const feature = await this.featureRepository.findOneBy({ id });
    if (!feature) {
      throw new NotFoundException(`Accessibility feature with id ${id} not found`);
    }
    return feature;
  }
}