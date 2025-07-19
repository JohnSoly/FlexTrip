import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Trip } from '../trip/trip.entity';
import { TransportationCategory } from '../transportation-category/transportation-category.entity';

@Entity('TripVehicleRequirement')
export class TripVehicleRequirement {
  @PrimaryGeneratedColumn()
  TripVehicleRequirementID: number;

  @Column({ nullable: false })
  TripID: number;

  @ManyToOne(() => Trip)
  @JoinColumn({ name: 'TripID' })
  trip: Trip;

  @Column({ nullable: false })
  TransportationCategoryID: number;

  @ManyToOne(() => TransportationCategory)
  @JoinColumn({ name: 'TransportationCategoryID' })
  transportationCategory: TransportationCategory;

  @Column({ type: 'int', nullable: false })
  Quantity: number;
} 