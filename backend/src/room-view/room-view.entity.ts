import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('RoomView')
export class RoomView {
  @PrimaryGeneratedColumn()
  RoomViewID: number;

  @Column({ type: 'varchar', unique: true, nullable: false })
  ViewName: string;

  @Column({ type: 'text', nullable: true })
  ViewDescription: string;
} 