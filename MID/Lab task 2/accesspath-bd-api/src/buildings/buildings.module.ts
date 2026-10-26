import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Building } from './building.entity';
import { BuildingsService } from './buildings.service';
import { BuildingsController } from './buildings.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Building])],
  controllers: [BuildingsController],
  providers: [BuildingsService],
})
export class BuildingsModule {}