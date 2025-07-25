import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransportationCategory } from './transportation-category.entity';

@Injectable()
export class TransportationCategoryService {
  constructor(
    @InjectRepository(TransportationCategory)
    private readonly transportationCategoryRepository: Repository<TransportationCategory>,
  ) {}

  async findAll(): Promise<TransportationCategory[]> {
    return this.transportationCategoryRepository.find();
  }
} 