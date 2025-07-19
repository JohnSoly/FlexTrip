import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Role')
export class Role {
  @PrimaryGeneratedColumn()
  RoleID: number;

  @Column({ type: 'varchar', unique: true, nullable: false })
  RoleName: string;

  @Column({ type: 'text', nullable: true })
  RoleDescription: string;
} 