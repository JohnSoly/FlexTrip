import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoomView } from './room-view.entity';

@Injectable()
export class RoomViewService {
  constructor(
    @InjectRepository(RoomView)
    private readonly roomViewRepository: Repository<RoomView>,
  ) {}

  async findAll(): Promise<RoomView[]> {
    return this.roomViewRepository.find();
  }
} 