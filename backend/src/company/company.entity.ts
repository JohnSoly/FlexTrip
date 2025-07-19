import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Customer } from '../customer/customer.entity';
import { Supplier } from '../supplier/supplier.entity';

@Entity('Company')
export class Company {
    @PrimaryGeneratedColumn()
    CompanyID: number;

    @Column({ unique: true, nullable: false })
    CustomerID: number;

    @OneToOne(() => Customer, customer => customer.company)
    @JoinColumn({ name: 'CustomerID' })
    customer: Customer;

    @Column({ unique: true, nullable: false })
    SupplierID: number;

    @OneToOne(() => Supplier)
    @JoinColumn({ name: 'SupplierID' })
    supplier: Supplier;

    @Column({ type: 'varchar', nullable: false })
    ContactName: string;

    @Column({ type: 'varchar', nullable: false })
    ContactPhone: string;
} 