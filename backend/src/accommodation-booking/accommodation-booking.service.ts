import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccommodationBooking } from './accommodation-booking.entity';

@Injectable()
export class AccommodationBookingService {
  constructor(
    @InjectRepository(AccommodationBooking)
    private readonly accommodationBookingRepository: Repository<AccommodationBooking>,
  ) {}

  async findAll(): Promise<AccommodationBooking[]> {
    return this.accommodationBookingRepository.find();
  }
} 