import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransportationCategory } from './transportation-category.entity';
import { TransportationCategoryService } from './transportation-category.service';
import { TransportationCategoryController } from './transportation-category.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TransportationCategory])],
  controllers: [TransportationCategoryController],
  providers: [TransportationCategoryService],
  exports: [TransportationCategoryService],
})
export class TransportationCategoryModule {} 