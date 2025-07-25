import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookedLeg } from './booked-leg.entity';
import { BookedLegService } from './booked-leg.service';
import { BookedLegController } from './booked-leg.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BookedLeg])],
  controllers: [BookedLegController],
  providers: [BookedLegService],
  exports: [BookedLegService],
})
export class BookedLegModule {} 