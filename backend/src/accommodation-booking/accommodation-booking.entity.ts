import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Booking } from '../booking/booking.entity';
import { RoomInventory } from '../room-inventory/room-inventory.entity';
import { Supplier } from '../supplier/supplier.entity';
import { MealPlan } from '../meal-plan/meal-plan.entity';
import { Country } from '../country/country.entity';

@Entity('AccommodationBooking')
export class AccommodationBooking {
  @PrimaryGeneratedColumn()
  AccommodationBookingID: number;

  @Column({ nullable: false })
  BookingID: number;

  @ManyToOne(() => Booking)
  @JoinColumn({ name: 'BookingID' })
  booking: Booking;

  @Column({ nullable: true })
  InventoryID: number;

  @ManyToOne(() => RoomInventory)
  @JoinColumn({ name: 'InventoryID' })
  inventory: RoomInventory;

  @Column({ nullable: true })
  SupplierID: number;

  @ManyToOne(() => Supplier)
  @JoinColumn({ name: 'SupplierID' })
  supplier: Supplier;

  @Column({ type: 'date', nullable: false })
  CheckInDate: Date;

  @Column({ type: 'date', nullable: false })
  CheckOutDate: Date;

  @Column({ type: 'int', nullable: false })
  NumberOfRoomsBooked: number;

  @Column({ type: 'int', nullable: false })
  NumberOfAdults: number;

  @Column({ type: 'int', nullable: false })
  NumberOfChildren: number;

  @Column({ nullable: false })
  MealPlanID: number;

  @ManyToOne(() => MealPlan)
  @JoinColumn({ name: 'MealPlanID' })
  mealPlan: MealPlan;

  @Column({ type: 'varchar', nullable: false })
  Status: string;

  @Column({ nullable: true })
  LeadParticipantNationalityCountryID: number;

  @ManyToOne(() => Country)
  @JoinColumn({ name: 'LeadParticipantNationalityCountryID' })
  leadParticipantNationality: Country;
} 