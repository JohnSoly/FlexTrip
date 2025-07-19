import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Team')
export class Team {
  @PrimaryGeneratedColumn()
  TeamID: number;

  @Column({ type: 'varchar', unique: true, nullable: false })
  TeamName: string;

  @Column({ type: 'text', nullable: true })
  TeamDescription: string;
} 