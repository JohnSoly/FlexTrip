import { Controller, Get } from '@nestjs/common';
import { CompensationService } from './compensation.service';
import { Compensation } from './compensation.entity';

@Controller('compensation')
export class CompensationController {
  constructor(private readonly compensationService: CompensationService) {}

  @Get()
  async findAll(): Promise<Compensation[]> {
    return this.compensationService.findAll();
  }
} 