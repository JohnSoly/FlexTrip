import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransportationBooking } from './transportation-booking.entity';

@Injectable()
export class TransportationBookingService {
  constructor(
    @InjectRepository(TransportationBooking)
    private readonly transportationBookingRepository: Repository<TransportationBooking>,
  ) {}

  async findAll(): Promise<TransportationBooking[]> {
    return this.transportationBookingRepository.find();
  }
} 