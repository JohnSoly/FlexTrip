import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Customer } from '../customer/customer.entity';
import { Employee } from '../employee/employee.entity';

@Entity('Booking')
export class Booking {
  @PrimaryGeneratedColumn()
  BookingID: number;

  @Column({ nullable: false })
  CustomerID: number;

  @OneToOne(() => Customer, customer => customer.booking)
  @JoinColumn({ name: 'CustomerID' })
  customer: Customer;

  @Column({ nullable: false })
  EmployeeID: number;

  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'EmployeeID' })
  employee: Employee;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: false })
  BookingCreationDate: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: false })
  LastModifiedDate: Date;

  @Column({ nullable: false })
  LastModifiedByEmployeeID: number;

  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'LastModifiedByEmployeeID' })
  lastModifiedBy: Employee;

  @Column({ type: 'varchar', nullable: false })
  BookingStatus: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  GrandTotal: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  CollectionAmount: number;
} 