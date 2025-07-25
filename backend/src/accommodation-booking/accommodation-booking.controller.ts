import { Controller, Get } from '@nestjs/common';
import { AccommodationBookingService } from './accommodation-booking.service';
import { AccommodationBooking } from './accommodation-booking.entity';

@Controller('accommodation-booking')
export class AccommodationBookingController {
  constructor(private readonly accommodationBookingService: AccommodationBookingService) {}

  @Get()
  async findAll(): Promise<AccommodationBooking[]> {
    return this.accommodationBookingService.findAll();
  }
} 