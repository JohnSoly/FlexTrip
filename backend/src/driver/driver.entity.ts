import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Driver')
export class Driver {
  @PrimaryGeneratedColumn()
  DriverID: number;

  @Column({ type: 'varchar', nullable: false })
  FirstName: string;

  @Column({ type: 'varchar', nullable: false })
  LastName: string;

  @Column({ type: 'varchar', unique: true, nullable: true })
  LicenseNumber: string;

  @Column({ type: 'varchar', nullable: true })
  PhoneNumber: string;
} 