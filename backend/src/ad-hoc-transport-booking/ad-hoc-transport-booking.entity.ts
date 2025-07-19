import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Booking } from '../booking/booking.entity';
import { Supplier } from '../supplier/supplier.entity';
import { TransportationCategory } from '../transportation-category/transportation-category.entity';
import { City } from '../city/city.entity';

@Entity('AdHocTransportBooking')
export class AdHocTransportBooking {
  @PrimaryGeneratedColumn()
  AdHocTransportBookingID: number;

  @Column({ nullable: false })
  BookingID: number;

  @ManyToOne(() => Booking)
  @JoinColumn({ name: 'BookingID' })
  booking: Booking;

  @Column({ nullable: true })
  SupplierID: number;

  @ManyToOne(() => Supplier)
  @JoinColumn({ name: 'SupplierID' })
  supplier: Supplier;

  @Column({ nullable: false })
  TransportationCategoryID: number;

  @ManyToOne(() => TransportationCategory)
  @JoinColumn({ name: 'TransportationCategoryID' })
  transportationCategory: TransportationCategory;

  @Column({ type: 'int', nullable: false })
  NumberOfSeats: number;

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
  TravelDateTime: Date;

  @Column({ type: 'varchar', nullable: false })
  Status: string;
} 