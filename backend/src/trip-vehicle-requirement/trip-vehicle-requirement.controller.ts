import { Controller, Get } from '@nestjs/common';
import { TripVehicleRequirementService } from './trip-vehicle-requirement.service';
import { TripVehicleRequirement } from './trip-vehicle-requirement.entity';

@Controller('trip-vehicle-requirement')
export class TripVehicleRequirementController {
  constructor(private readonly tripVehicleRequirementService: TripVehicleRequirementService) {}

  @Get()
  async findAll(): Promise<TripVehicleRequirement[]> {
    return this.tripVehicleRequirementService.findAll();
  }
} 