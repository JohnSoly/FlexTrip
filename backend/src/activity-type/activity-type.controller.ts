import { Controller, Get } from '@nestjs/common';
import { ActivityTypeService } from './activity-type.service';
import { ActivityType } from './activity-type.entity';

@Controller('activity-type')
export class ActivityTypeController {
  constructor(private readonly activityTypeService: ActivityTypeService) {}

  @Get()
  async findAll(): Promise<ActivityType[]> {
    return this.activityTypeService.findAll();
  }
} 