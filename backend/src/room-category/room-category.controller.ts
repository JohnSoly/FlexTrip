import { Controller, Get } from '@nestjs/common';
import { RoomCategoryService } from './room-category.service';
import { RoomCategory } from './room-category.entity';

@Controller('room-category')
export class RoomCategoryController {
  constructor(private readonly roomCategoryService: RoomCategoryService) {}

  @Get()
  async findAll(): Promise<RoomCategory[]> {
    return this.roomCategoryService.findAll();
  }
} 