import { Controller, Get } from '@nestjs/common';
import { RoomViewService } from './room-view.service';
import { RoomView } from './room-view.entity';

@Controller('room-view')
export class RoomViewController {
  constructor(private readonly roomViewService: RoomViewService) {}

  @Get()
  async findAll(): Promise<RoomView[]> {
    return this.roomViewService.findAll();
  }
} 