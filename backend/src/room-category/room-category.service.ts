import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoomCategory } from './room-category.entity';

@Injectable()
export class RoomCategoryService {
  constructor(
    @InjectRepository(RoomCategory)
    private readonly roomCategoryRepository: Repository<RoomCategory>,
  ) {}

  async findAll(): Promise<RoomCategory[]> {
    return this.roomCategoryRepository.find();
  }
} 