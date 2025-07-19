import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Hotel } from '../hotel/hotel.entity';
import { Supplier } from '../supplier/supplier.entity';
import { RoomCategory } from '../room-category/room-category.entity';
import { RoomType } from '../room-type/room-type.entity';
import { RoomView } from '../room-view/room-view.entity';

@Entity('RoomInventory')
export class RoomInventory {
  @PrimaryGeneratedColumn()
  InventoryID: number;

  @Column({ nullable: false })
  HotelID: number;

  @ManyToOne(() => Hotel)
  @JoinColumn({ name: 'HotelID' })
  hotel: Hotel;

  @Column({ nullable: false })
  SupplierID: number;

  @ManyToOne(() => Supplier)
  @JoinColumn({ name: 'SupplierID' })
  supplier: Supplier;

  @Column({ nullable: false })
  RoomCategoryID: number;

  @ManyToOne(() => RoomCategory)
  @JoinColumn({ name: 'RoomCategoryID' })
  roomCategory: RoomCategory;

  @Column({ nullable: false })
  RoomTypeID: number;

  @ManyToOne(() => RoomType)
  @JoinColumn({ name: 'RoomTypeID' })
  roomType: RoomType;

  @Column({ nullable: false })
  RoomViewID: number;

  @ManyToOne(() => RoomView)
  @JoinColumn({ name: 'RoomViewID' })
  roomView: RoomView;

  @Column({ type: 'int', nullable: false })
  Quantity: number;

  @Column({ type: 'date', nullable: false })
  ValidFromDate: Date;

  @Column({ type: 'date', nullable: false })
  ValidToDate: Date;
} 