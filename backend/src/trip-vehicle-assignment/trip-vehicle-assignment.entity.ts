import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Trip } from '../trip/trip.entity';
import { Vehicle } from '../vehicle/vehicle.entity';
import { Driver } from '../driver/driver.entity';
import { Employee } from '../employee/employee.entity';

@Entity('TripVehicleAssignment')
export class TripVehicleAssignment {
  @PrimaryGeneratedColumn()
  TripVehicleAssignmentID: number;

  @Column({ nullable: false })
  TripID: number;

  @ManyToOne(() => Trip)
  @JoinColumn({ name: 'TripID' })
  trip: Trip;

  @Column({ nullable: true })
  VehicleID: number;

  @ManyToOne(() => Vehicle)
  @JoinColumn({ name: 'VehicleID' })
  vehicle: Vehicle;

  @Column({ nullable: true })
  DriverID: number;

  @ManyToOne(() => Driver)
  @JoinColumn({ name: 'DriverID' })
  driver: Driver;

  @Column({ nullable: true })
  GuideEmployeeID: number;

  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'GuideEmployeeID' })
  guide: Employee;
} 