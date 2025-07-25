import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripVehicleRequirement } from './trip-vehicle-requirement.entity';
import { TripVehicleRequirementService } from './trip-vehicle-requirement.service';
import { TripVehicleRequirementController } from './trip-vehicle-requirement.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TripVehicleRequirement])],
  controllers: [TripVehicleRequirementController],
  providers: [TripVehicleRequirementService],
  exports: [TripVehicleRequirementService],
})
export class TripVehicleRequirementModule {} 