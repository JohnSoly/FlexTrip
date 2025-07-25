import { Controller, Get } from '@nestjs/common';
import { RoomInventoryService } from './room-inventory.service';
import { RoomInventory } from './room-inventory.entity';

@Controller('room-inventory')
export class RoomInventoryController {
  constructor(private readonly roomInventoryService: RoomInventoryService) {}

  @Get()
  async findAll(): Promise<RoomInventory[]> {
    return this.roomInventoryService.findAll();
  }
} 