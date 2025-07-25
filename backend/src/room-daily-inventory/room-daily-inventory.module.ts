import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomDailyInventory } from './room-daily-inventory.entity';
import { RoomDailyInventoryService } from './room-daily-inventory.service';
import { RoomDailyInventoryController } from './room-daily-inventory.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RoomDailyInventory])],
  controllers: [RoomDailyInventoryController],
  providers: [RoomDailyInventoryService],
  exports: [RoomDailyInventoryService],
})
export class RoomDailyInventoryModule {} 