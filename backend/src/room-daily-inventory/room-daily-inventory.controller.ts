import { Controller, Get } from '@nestjs/common';
import { RoomDailyInventoryService } from './room-daily-inventory.service';
import { RoomDailyInventory } from './room-daily-inventory.entity';

@Controller('room-daily-inventory')
export class RoomDailyInventoryController {
  constructor(private readonly roomDailyInventoryService: RoomDailyInventoryService) {}

  @Get()
  async findAll(): Promise<RoomDailyInventory[]> {
    return this.roomDailyInventoryService.findAll();
  }
} 