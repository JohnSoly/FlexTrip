import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomCategory } from './room-category.entity';
import { RoomCategoryService } from './room-category.service';
import { RoomCategoryController } from './room-category.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RoomCategory])],
  controllers: [RoomCategoryController],
  providers: [RoomCategoryService],
  exports: [RoomCategoryService],
})
export class RoomCategoryModule {} 