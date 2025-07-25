import { Controller, Get } from '@nestjs/common';
import { DriverService } from './driver.service';
import { Driver } from './driver.entity';

@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Get()
  async findAll(): Promise<Driver[]> {
    return this.driverService.findAll();
  }
} 