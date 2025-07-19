import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Client } from '../client/client.entity';
import { Company } from '../company/company.entity';
import { Booking } from '../booking/booking.entity';

@Entity('Customer')
export class Customer {
  @PrimaryGeneratedColumn()
  CustomerID: number;

  @Column({ type: 'varchar', nullable: false })
  CustomerType: string; // 'Client' or 'Company'

  @OneToOne(() => Client, (client) => client.customer)
  client: Client;

  @OneToOne(() => Company, (company) => company.customer)
  company: Company;
  
  @OneToOne(() => Booking, (booking) => booking.customer)
  booking: Booking;
} 