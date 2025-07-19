// backend/src/country/country.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { CountryService } from './country.service';

@Controller('country') // This means all routes in this controller will start with /country
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  // This method will handle HTTP POST requests to /country
  @Post()
  create(@Body() countryData: { CountryName: string }) {
    return this.countryService.create(countryData);
  }
}
