import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DayUseBooking } from './day-use-booking.entity';
import { DayUseBookingService } from './day-use-booking.service';
import { DayUseBookingController } from './day-use-booking.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DayUseBooking])],
  controllers: [DayUseBookingController],
  providers: [DayUseBookingService],
  exports: [DayUseBookingService],
})
export class DayUseBookingModule {} 