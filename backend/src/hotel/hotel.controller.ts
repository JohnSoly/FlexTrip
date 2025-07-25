import { Controller, Get } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { Hotel } from './hotel.entity';

@Controller('hotel')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Get()
  async findAll(): Promise<Hotel[]> {
    return this.hotelService.findAll();
  }
} 