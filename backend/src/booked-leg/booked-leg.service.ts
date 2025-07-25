import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookedLeg } from './booked-leg.entity';

@Injectable()
export class BookedLegService {
  constructor(
    @InjectRepository(BookedLeg)
    private readonly bookedLegRepository: Repository<BookedLeg>,
  ) {}

  async findAll(): Promise<BookedLeg[]> {
    return this.bookedLegRepository.find();
  }
} 