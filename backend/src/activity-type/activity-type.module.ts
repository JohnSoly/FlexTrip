import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityType } from './activity-type.entity';
import { ActivityTypeService } from './activity-type.service';
import { ActivityTypeController } from './activity-type.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ActivityType])],
  controllers: [ActivityTypeController],
  providers: [ActivityTypeService],
  exports: [ActivityTypeService],
})
export class ActivityTypeModule {} 