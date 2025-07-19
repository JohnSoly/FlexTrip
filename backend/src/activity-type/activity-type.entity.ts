import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('ActivityType')
export class ActivityType {
  @PrimaryGeneratedColumn()
  ActivityTypeID: number;

  @Column({ type: 'varchar', unique: true, nullable: false })
  ActivityTypeName: string;

  @Column({ type: 'text', nullable: true })
  Description: string;
} 