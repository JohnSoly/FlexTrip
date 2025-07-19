import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Booking } from '../booking/booking.entity';
import { Hotel } from '../hotel/hotel.entity';

@Entity('DayUseBooking')
export class DayUseBooking {
  @PrimaryGeneratedColumn()
  DayUseBookingID: number;

  @Column({ nullable: false })
  BookingID: number;

  @ManyToOne(() => Booking)
  @JoinColumn({ name: 'BookingID' })
  booking: Booking;

  @Column({ nullable: false })
  HotelID: number;

  @ManyToOne(() => Hotel)
  @JoinColumn({ name: 'HotelID' })
  hotel: Hotel;

  @Column({ type: 'date', nullable: false })
  CheckInDate: Date;

  @Column({ type: 'int', nullable: false })
  NumberOfAdults: number;

  @Column({ type: 'int', nullable: false })
  NumberOfChildren: number;

  @Column({ type: 'text', nullable: true })
  Comments: string;
} 