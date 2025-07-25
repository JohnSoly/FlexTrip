import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccommodationBooking } from './accommodation-booking.entity';
import { AccommodationBookingService } from './accommodation-booking.service';
import { AccommodationBookingController } from './accommodation-booking.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AccommodationBooking])],
  controllers: [AccommodationBookingController],
  providers: [AccommodationBookingService],
  exports: [AccommodationBookingService],
})
export class AccommodationBookingModule {} 