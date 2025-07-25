import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VisaBooking } from './visa-booking.entity';

@Injectable()
export class VisaBookingService {
  constructor(
    @InjectRepository(VisaBooking)
    private readonly visaBookingRepository: Repository<VisaBooking>,
  ) {}

  async findAll(): Promise<VisaBooking[]> {
    return this.visaBookingRepository.find();
  }
} 