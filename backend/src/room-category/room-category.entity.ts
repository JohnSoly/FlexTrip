import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('RoomCategory')
export class RoomCategory {
  @PrimaryGeneratedColumn()
  RoomCategoryID: number;

  @Column({ type: 'varchar', unique: true, nullable: false })
  CategoryName: string;

  @Column({ type: 'text', nullable: true })
  CategoryDescription: string;
} 