// backend/src/country/country.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from './country.entity';
import { CountryController } from './country.controller';
import { CountryService } from './country.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Country]), // This makes the Country entity available to this module.
  ],
  controllers: [CountryController], // We've now added the controller
  providers: [CountryService], // We've now added the service
})
export class CountryModule {}
