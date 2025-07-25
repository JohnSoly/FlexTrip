import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Compensation } from './compensation.entity';

@Injectable()
export class CompensationService {
  constructor(
    @InjectRepository(Compensation)
    private readonly compensationRepository: Repository<Compensation>,
  ) {}

  async findAll(): Promise<Compensation[]> {
    return this.compensationRepository.find();
  }
} 