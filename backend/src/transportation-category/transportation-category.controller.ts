import { Controller, Get } from '@nestjs/common';
import { TransportationCategoryService } from './transportation-category.service';
import { TransportationCategory } from './transportation-category.entity';

@Controller('transportation-category')
export class TransportationCategoryController {
  constructor(private readonly transportationCategoryService: TransportationCategoryService) {}

  @Get()
  async findAll(): Promise<TransportationCategory[]> {
    return this.transportationCategoryService.findAll();
  }
} 