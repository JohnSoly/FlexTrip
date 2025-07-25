import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisaBooking } from './visa-booking.entity';
import { VisaBookingService } from './visa-booking.service';
import { VisaBookingController } from './visa-booking.controller';

@Module({
  imports: [TypeOrmModule.forFeature([VisaBooking])],
  controllers: [VisaBookingController],
  providers: [VisaBookingService],
  exports: [VisaBookingService],
})
export class VisaBookingModule {} 