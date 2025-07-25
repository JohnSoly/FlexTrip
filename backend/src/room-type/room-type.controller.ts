import { Controller, Get } from '@nestjs/common';
import { RoomTypeService } from './room-type.service';
import { RoomType } from './room-type.entity';

@Controller('room-type')
export class RoomTypeController {
  constructor(private readonly roomTypeService: RoomTypeService) {}

  @Get()
  async findAll(): Promise<RoomType[]> {
    return this.roomTypeService.findAll();
  }
} 