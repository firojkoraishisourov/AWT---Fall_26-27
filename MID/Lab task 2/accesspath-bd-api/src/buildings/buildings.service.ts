import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Building } from './building.entity';
import { CreateBuildingDto } from './dto/create-building.dto';

@Injectable()
export class BuildingsService {
  constructor(
    @InjectRepository(Building)
    private buildingRepository: Repository<Building>,
  ) {}

  create(dto: CreateBuildingDto) {
    const building = this.buildingRepository.create(dto);
    return this.buildingRepository.save(building);
  }

  findAll() {
    return this.buildingRepository.find();
  }

  async findOne(id: number) {
    const building = await this.buildingRepository.findOneBy({ id });
    if (!building) {
      throw new NotFoundException(`Building with id ${id} not found`);
    }
    return building;
  }
}