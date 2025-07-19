import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Booking } from '../booking/booking.entity';
import { Country } from '../country/country.entity';

@Entity('VisaBooking')
export class VisaBooking {
  @PrimaryGeneratedColumn()
  VisaBookingID: number;

  @Column({ nullable: false })
  BookingID: number;

  @ManyToOne(() => Booking)
  @JoinColumn({ name: 'BookingID' })
  booking: Booking;

  @Column({ nullable: false })
  DestinationCountryID: number;

  @ManyToOne(() => Country)
  @JoinColumn({ name: 'DestinationCountryID' })
  destinationCountry: Country;

  @Column({ type: 'varchar', nullable: true })
  VisaType: string;

  @Column({ type: 'int', nullable: false })
  NumberOfPeople: number;

  @Column({ type: 'text', nullable: true })
  Comments: string;

  @Column({ type: 'varchar', nullable: false })
  Status: string;
} 