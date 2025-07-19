import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Booking } from '../booking/booking.entity';
import { City } from '../city/city.entity';

@Entity('BookingParticipant')
export class BookingParticipant {
  @PrimaryGeneratedColumn()
  BookingParticipantID: number;

  @Column({ nullable: false })
  BookingID: number;

  @ManyToOne(() => Booking)
  @JoinColumn({ name: 'BookingID' })
  booking: Booking;

  @Column({ type: 'varchar', nullable: false })
  FirstName: string;

  @Column({ type: 'varchar', nullable: false })
  LastName: string;

  @Column({ type: 'varchar', nullable: true })
  NationalID: string;

  @Column({ nullable: true })
  CityOfResidenceID: number;

  @ManyToOne(() => City)
  @JoinColumn({ name: 'CityOfResidenceID' })
  cityOfResidence: City;

  @Column({ type: 'int', nullable: true })
  Age: number;
} 