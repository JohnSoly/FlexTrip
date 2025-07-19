import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Trip } from '../trip/trip.entity';
import { City } from '../city/city.entity';

@Entity('TripLeg')
export class TripLeg {
  @PrimaryGeneratedColumn()
  TripLegID: number;

  @Column({ nullable: false })
  TripID: number;

  @ManyToOne(() => Trip)
  @JoinColumn({ name: 'TripID' })
  trip: Trip;

  @Column({ type: 'int', nullable: false })
  LegOrder: number;

  @Column({ nullable: false })
  OriginCityID: number;

  @ManyToOne(() => City)
  @JoinColumn({ name: 'OriginCityID' })
  originCity: City;

  @Column({ nullable: false })
  DestinationCityID: number;

  @ManyToOne(() => City)
  @JoinColumn({ name: 'DestinationCityID' })
  destinationCity: City;

  @Column({ type: 'timestamp', nullable: false })
  DepartureDateTime: Date;

  @Column({ type: 'timestamp', nullable: false })
  ArrivalDateTime: Date;

  @Column({ type: 'int', nullable: false })
  AvailableSeats: number;
} 