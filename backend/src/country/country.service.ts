// backend/src/country/country.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from './country.entity';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country)
    private countryRepository: Repository<Country>,
  ) {}

  // This method creates a new country record in the database.
  async create(countryData: { CountryName: string }): Promise<Country> {
    const newCountry = this.countryRepository.create(countryData);
    return this.countryRepository.save(newCountry);
  }
}
