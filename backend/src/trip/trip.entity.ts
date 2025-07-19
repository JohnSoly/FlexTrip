import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';

@Entity('Trip')
export class Trip {
  @PrimaryGeneratedColumn()
  TripID: number;

  @Column({ type: 'varchar', nullable: true })
  TripName: string;

  @Column({ type: 'date', nullable: false })
  TripDate: Date;

  @Column({ type: 'varchar', nullable: true })
  TripType: string;

  @Column({ nullable: true })
  PairedTripID: number;

  @OneToOne(() => Trip)
  @JoinColumn({ name: 'PairedTripID' })
  pairedTrip: Trip;
} 