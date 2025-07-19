import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { TransportationBooking } from '../transportation-booking/transportation-booking.entity';
import { TripLeg } from '../trip-leg/trip-leg.entity';

@Entity('BookedLeg')
export class BookedLeg {
  @PrimaryGeneratedColumn()
  BookedLegID: number;

  @Column({ nullable: false })
  TransportationBookingID: number;

  @ManyToOne(() => TransportationBooking)
  @JoinColumn({ name: 'TransportationBookingID' })
  transportationBooking: TransportationBooking;

  @Column({ nullable: false })
  TripLegID: number;

  @ManyToOne(() => TripLeg)
  @JoinColumn({ name: 'TripLegID' })
  tripLeg: TripLeg;
} 