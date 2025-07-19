import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { City } from '../city/city.entity';

@Entity('Hotel')
export class Hotel {
  @PrimaryGeneratedColumn()
  HotelID: number;

  @Column({ type: 'varchar', nullable: false })
  Name: string;

  @Column({ type: 'text', nullable: true })
  Description: string;

  @Column({ type: 'text', nullable: true })
  Address: string;

  @Column({ nullable: false })
  CityID: number;

  @ManyToOne(() => City)
  @JoinColumn({ name: 'CityID' })
  city: City;

  @Column({ type: 'decimal', precision: 2, scale: 1, nullable: true })
  StarRating: number;

  @Column({ type: 'text', nullable: true })
  DirectHotelContactInfo: string;
} 