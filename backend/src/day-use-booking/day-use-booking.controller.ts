import { Controller, Get } from '@nestjs/common';
import { DayUseBookingService } from './day-use-booking.service';
import { DayUseBooking } from './day-use-booking.entity';

@Controller('day-use-booking')
export class DayUseBookingController {
  constructor(private readonly dayUseBookingService: DayUseBookingService) {}

  @Get()
  async findAll(): Promise<DayUseBooking[]> {
    return this.dayUseBookingService.findAll();
  }
} 