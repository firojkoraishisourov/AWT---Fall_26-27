import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Report } from './report.entity';
import { CreateReportDto } from './dto/create-report.dto';
import { Building } from '../buildings/building.entity';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report)
    private reportRepository: Repository<Report>,
    @InjectRepository(Building)
    private buildingRepository: Repository<Building>,
  ) {}

  async create(dto: CreateReportDto) {
    const building = await this.buildingRepository.findOneBy({ id: dto.buildingId });
    if (!building) {
      throw new NotFoundException(`Building with id ${dto.buildingId} not found`);
    }
    const report = this.reportRepository.create(dto);
    return this.reportRepository.save(report);
  }

  findAll() {
    return this.reportRepository.find();
  }

  async findOne(id: number) {
    const report = await this.reportRepository.findOneBy({ id });
    if (!report) {
      throw new NotFoundException(`Report with id ${id} not found`);
    }
    return report;
  }
}