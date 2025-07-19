import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Supplier')
export class Supplier {
  @PrimaryGeneratedColumn()
  SupplierID: number;

  @Column({ type: 'varchar', unique: true, nullable: false })
  Name: string;

  @Column({ type: 'text', nullable: true })
  ContactInfo: string;
} 