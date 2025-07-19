import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Country } from '../country/country.entity';

@Entity('City')
export class City {
  @PrimaryGeneratedColumn()
  CityID: number;

  @Column({ type: 'varchar', nullable: false })
  CityName: string;

  @Column({ nullable: false })
  CountryID: number;

  @ManyToOne(() => Country)
  @JoinColumn({ name: 'CountryID' })
  country: Country;
} 