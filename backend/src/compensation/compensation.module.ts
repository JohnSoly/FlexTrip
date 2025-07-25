import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compensation } from './compensation.entity';
import { CompensationService } from './compensation.service';
import { CompensationController } from './compensation.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Compensation])],
  controllers: [CompensationController],
  providers: [CompensationService],
  exports: [CompensationService],
})
export class CompensationModule {} 