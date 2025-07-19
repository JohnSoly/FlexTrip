import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Booking } from '../booking/booking.entity';
import { PaymentMethod } from '../payment-method/payment-method.entity';

@Entity('Payment')
export class Payment {
  @PrimaryGeneratedColumn()
  PaymentID: number;

  @Column({ nullable: false })
  BookingID: number;

  @ManyToOne(() => Booking)
  @JoinColumn({ name: 'BookingID' })
  booking: Booking;

  @Column({ type: 'timestamp', nullable: false })
  PaymentDate: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  Amount: number;

  @Column({ nullable: false })
  PaymentMethodID: number;

  @ManyToOne(() => PaymentMethod)
  @JoinColumn({ name: 'PaymentMethodID' })
  paymentMethod: PaymentMethod;

  @Column({ type: 'varchar', length: 3, nullable: false })
  Currency: string;

  @Column({ type: 'varchar', nullable: true })
  AttachmentURL: string;
} 