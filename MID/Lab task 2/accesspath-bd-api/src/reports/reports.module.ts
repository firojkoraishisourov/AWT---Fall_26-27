import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Report } from './report.entity';
import { Building } from '../buildings/building.entity';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Report, Building])],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}