import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn,
} from 'typeorm';
import { Building } from '../buildings/building.entity';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  buildingId: number;

  @ManyToOne(() => Building, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'buildingId' })
  building: Building;

  @Column()
  reporterName: string;

  @Column()
  message: string;

  @Column({ nullable: true })
  photoUrl: string;

  @Column({ default: 'pending' })
  status: string; // pending, approved, rejected (admin moderation)

  @CreateDateColumn()
  createdAt: Date;
}