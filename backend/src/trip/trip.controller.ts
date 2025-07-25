import { Controller, Get } from '@nestjs/common';
import { TripService } from  './trip.service';
import { Trip } from './trip.entity';

@Controller('trip')
export class TripController {
  constructor(private readonly tripService: TripService) {}

  @Get()
  async findAll(): Promise<Trip[]> {
    return this.tripService.findAll();
  }
} 