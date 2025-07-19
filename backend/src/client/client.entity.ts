import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Customer } from '../customer/customer.entity';
import { City } from '../city/city.entity';
import { Country } from '../country/country.entity';

@Entity('Client')
export class Client {
  @PrimaryGeneratedColumn()
  ClientID: number;

  @Column({ unique: true, nullable: false })
  CustomerID: number;

  @OneToOne(() => Customer, customer => customer.client)
  @JoinColumn({ name: 'CustomerID' })
  customer: Customer;

  @Column({ type: 'varchar', nullable: false })
  FullName: string;

  @Column({ type: 'varchar', nullable: true })
  PhoneNumber1: string;

  @Column({ type: 'varchar', nullable: true })
  PhoneNumber2: string;

  @Column({ type: 'varchar', unique: true, nullable: true })
  Email: string;

  @Column({ type: 'varchar', unique: true, nullable: true })
  NationalID: string;

  @Column({ nullable: true })
  CityOfResidenceID: number;

  @ManyToOne(() => City)
  @JoinColumn({ name: 'CityOfResidenceID' })
  cityOfResidence: City;

  @Column({ type: 'int', nullable: true })
  Age: number;

  @Column({ nullable: true })
  NationalityCountryID: number;

  @ManyToOne(() => Country)
  @JoinColumn({ name: 'NationalityCountryID' })
  nationality: Country;
} 