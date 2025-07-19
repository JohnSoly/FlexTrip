import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { RoomInventory } from '../room-inventory/room-inventory.entity';

@Entity('RoomDailyInventory')
export class RoomDailyInventory {
  @PrimaryGeneratedColumn()
  RoomDailyInventoryID: number;

  @Column({ nullable: false })
  InventoryID: number;

  @ManyToOne(() => RoomInventory)
  @JoinColumn({ name: 'InventoryID' })
  inventory: RoomInventory;

  @Column({ type: 'date', nullable: false })
  InventoryDate: Date;

  @Column({ type: 'int', nullable: false })
  AvailableQuantity: number;
} 