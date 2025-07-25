import { Controller, Get } from '@nestjs/common';
import { CityService } from './city.service';
import { City } from './city.entity';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get()
  async findAll(): Promise<City[]> {
    return this.cityService.findAll();
  }
} 