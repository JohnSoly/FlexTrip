import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransportationBooking } from './transportation-booking.entity';
import { TransportationBookingService } from './transportation-booking.service';
import { TransportationBookingController } from './transportation-booking.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TransportationBooking])],
  controllers: [TransportationBookingController],
  providers: [TransportationBookingService],
  exports: [TransportationBookingService],
})
export class TransportationBookingModule {} 