import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Booking } from '../booking/booking.entity';

@Entity('TransportationBooking')
export class TransportationBooking {
  @PrimaryGeneratedColumn()
  TransportationBookingID: number;

  @Column({ nullable: false })
  BookingID: number;

  @ManyToOne(() => Booking)
  @JoinColumn({ name: 'BookingID' })
  booking: Booking;

  @Column({ type: 'int', nullable: false })
  NumberOfSeatsBooked: number;

  @Column({ type: 'text', nullable: true })
  Comments: string;
} 