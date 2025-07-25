import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TripVehicleRequirement } from './trip-vehicle-requirement.entity';

@Injectable()
export class TripVehicleRequirementService {
  constructor(
    @InjectRepository(TripVehicleRequirement)
    private readonly tripVehicleRequirementRepository: Repository<TripVehicleRequirement>,
  ) {}

  async findAll(): Promise<TripVehicleRequirement[]> {
    return this.tripVehicleRequirementRepository.find();
  }
} 