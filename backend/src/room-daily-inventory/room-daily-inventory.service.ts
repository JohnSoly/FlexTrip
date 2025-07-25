import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoomDailyInventory } from './room-daily-inventory.entity';

@Injectable()
export class RoomDailyInventoryService {
  constructor(
    @InjectRepository(RoomDailyInventory)
    private readonly roomDailyInventoryRepository: Repository<RoomDailyInventory>,
  ) {}

  async findAll(): Promise<RoomDailyInventory[]> {
    return this.roomDailyInventoryRepository.find();
  }
} 