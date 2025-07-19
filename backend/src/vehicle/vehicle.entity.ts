import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { TransportationCategory } from '../transportation-category/transportation-category.entity';
import { Supplier } from '../supplier/supplier.entity';

@Entity('Vehicle')
export class Vehicle {
  @PrimaryGeneratedColumn()
  VehicleID: number;

  @Column({ nullable: false })
  TransportationCategoryID: number;

  @ManyToOne(() => TransportationCategory)
  @JoinColumn({ name: 'TransportationCategoryID' })
  transportationCategory: TransportationCategory;

  @Column({ nullable: false })
  SupplierID: number;

  @ManyToOne(() => Supplier)
  @JoinColumn({ name: 'SupplierID' })
  supplier: Supplier;

  @Column({ type: 'varchar', unique: true, nullable: true })
  LicensePlate: string;
} 