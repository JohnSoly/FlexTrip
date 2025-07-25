import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DayUseBooking } from './day-use-booking.entity';

@Injectable()
export class DayUseBookingService {
  constructor(
    @InjectRepository(DayUseBooking)
    private readonly dayUseBookingRepository: Repository<DayUseBooking>,
  ) {}

  async findAll(): Promise<DayUseBooking[]> {
    return this.dayUseBookingRepository.find();
  }
} 