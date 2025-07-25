import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoomInventory } from './room-inventory.entity';

@Injectable()
export class RoomInventoryService {
  constructor(
    @InjectRepository(RoomInventory)
    private readonly roomInventoryRepository: Repository<RoomInventory>,
  ) {}

  async findAll(): Promise<RoomInventory[]> {
    return this.roomInventoryRepository.find();
  }
} 