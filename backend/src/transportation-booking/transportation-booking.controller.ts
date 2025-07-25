import { Controller, Get } from '@nestjs/common';
import { TransportationBookingService } from './transportation-booking.service';
import { TransportationBooking } from './transportation-booking.entity';

@Controller('transportation-booking')
export class TransportationBookingController {
  constructor(private readonly transportationBookingService: TransportationBookingService) {}

  @Get()
  async findAll(): Promise<TransportationBooking[]> {
    return this.transportationBookingService.findAll();
  }
} 