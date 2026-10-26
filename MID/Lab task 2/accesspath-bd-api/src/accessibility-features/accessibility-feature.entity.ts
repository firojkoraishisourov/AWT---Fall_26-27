import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn,
} from 'typeorm';
import { Building } from '../buildings/building.entity';

@Entity()
export class AccessibilityFeature {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  buildingId: number;

  @ManyToOne(() => Building, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'buildingId' })
  building: Building;

  @Column()
  featureType: string; // Ramp, Elevator, Accessible Toilet, Reserved Parking

  @Column()
  description: string;

  @Column({ default: true })
  isAvailable: boolean;

  @CreateDateColumn()
  lastVerifiedAt: Date;
}