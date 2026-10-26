import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Building {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  buildingType: string; // e.g. Academic, Library, Hospital

  @Column()
  address: string;

  @Column()
  city: string;

  @CreateDateColumn()
  createdAt: Date;
}