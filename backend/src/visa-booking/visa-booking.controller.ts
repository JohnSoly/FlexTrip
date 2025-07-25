import { Controller, Get } from '@nestjs/common';
import { VisaBookingService } from './visa-booking.service';
import { VisaBooking } from './visa-booking.entity';

@Controller('visa-booking')
export class VisaBookingController {
  constructor(private readonly visaBookingService: VisaBookingService) {}

  @Get()
  async findAll(): Promise<VisaBooking[]> {
    return this.visaBookingService.findAll();
  }
} 