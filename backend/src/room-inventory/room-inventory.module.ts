import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomInventory } from './room-inventory.entity';
import { RoomInventoryService } from './room-inventory.service';
import { RoomInventoryController } from './room-inventory.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RoomInventory])],
  controllers: [RoomInventoryController],
  providers: [RoomInventoryService],
  exports: [RoomInventoryService],
})
export class RoomInventoryModule {} 