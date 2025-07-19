import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('TransportationCategory')
export class TransportationCategory {
  @PrimaryGeneratedColumn()
  TransportationCategoryID: number;

  @Column({ type: 'varchar', nullable: false })
  VehicleType: string;

  @Column({ type: 'int', nullable: false })
  SeatCapacity: number;
} 