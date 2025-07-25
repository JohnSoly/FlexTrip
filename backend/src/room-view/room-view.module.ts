import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomView } from './room-view.entity';
import { RoomViewService } from './room-view.service';
import { RoomViewController } from './room-view.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RoomView])],
  controllers: [RoomViewController],
  providers: [RoomViewService],
  exports: [RoomViewService],
})
export class RoomViewModule {} 