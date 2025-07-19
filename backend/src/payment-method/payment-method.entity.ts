import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('PaymentMethod')
export class PaymentMethod {
  @PrimaryGeneratedColumn()
  PaymentMethodID: number;

  @Column({ type: 'varchar', unique: true, nullable: false })
  MethodName: string;
} 