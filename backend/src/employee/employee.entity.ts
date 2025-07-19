import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Role } from '../role/role.entity';
import { Team } from '../team/team.entity';

@Entity('Employee')
export class Employee {
  @PrimaryGeneratedColumn()
  EmployeeID: number;

  @Column({ type: 'varchar', nullable: false })
  FirstName: string;

  @Column({ type: 'varchar', nullable: false })
  LastName: string;

  @Column({ type: 'varchar', unique: true, nullable: true })
  PhoneNumber: string;

  @Column({ type: 'varchar', unique: true, nullable: true })
  NationalID: string;

  @Column({ type: 'varchar', unique: true, nullable: true })
  Email: string;

  @Column({ type: 'varchar', nullable: false })
  Password: string;

  @Column({ type: 'date', nullable: true })
  JoinedDate: Date;

  @Column({ nullable: false })
  RoleID: number;

  @ManyToOne(() => Role)
  @JoinColumn({ name: 'RoleID' })
  role: Role;

  @Column({ nullable: false })
  TeamID: number;

  @ManyToOne(() => Team)
  @JoinColumn({ name: 'TeamID' })
  team: Team;
} 