import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('RoomType')
export class RoomType {
  @PrimaryGeneratedColumn()
  RoomTypeID: number;

  @Column({ type: 'varchar', unique: true, nullable: false })
  TypeName: string;

  @Column({ type: 'text', nullable: true })
  TypeDescription: string;
} 