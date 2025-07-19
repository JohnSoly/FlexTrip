// backend/src/country/country.controller.ts

import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { CountryService } from './country.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@Controller('country') // This means all routes in this controller will start with /country
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  // This method will handle HTTP POST requests to /country
  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() countryData: { CountryName: string }, @CurrentUser() user: any) {
    console.log('User creating country:', user);
    return this.countryService.create(countryData);
  }

  // This method will handle HTTP GET requests to /country
  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@CurrentUser() user: any) {
    console.log('User fetching countries:', user);
    return this.countryService.findAll();
  }
}
