import { Controller, Get } from '@nestjs/common';
import { MealPlanService } from './meal-plan.service';
import { MealPlan } from './meal-plan.entity';

@Controller('meal-plan')
export class MealPlanController {
  constructor(private readonly mealPlanService: MealPlanService) {}

  @Get()
  async findAll(): Promise<MealPlan[]> {
    return this.mealPlanService.findAll();
  }
} 