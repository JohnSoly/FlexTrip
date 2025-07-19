import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Employee } from '../employee/employee.entity';

@Entity('Compensation')
export class Compensation {
  @PrimaryGeneratedColumn()
  CompensationID: number;

  @Column({ unique: true, nullable: false })
  EmployeeID: number;

  @OneToOne(() => Employee)
  @JoinColumn({ name: 'EmployeeID' })
  employee: Employee;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  BasicSalary: number;

  @Column({ type: 'decimal', precision: 5, scale: 4, nullable: true })
  CommissionRate: number;
} 