import { Controller, Get } from '@nestjs/common';
import { BookedLegService } from './booked-leg.service';
import { BookedLeg } from './booked-leg.entity';

@Controller('booked-leg')
export class BookedLegController {
  constructor(private readonly bookedLegService: BookedLegService) {}

  @Get()
  async findAll(): Promise<BookedLeg[]> {
    return this.bookedLegService.findAll();
  }
} 