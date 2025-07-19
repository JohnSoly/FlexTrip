import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('MealPlan')
export class MealPlan {
  @PrimaryGeneratedColumn()
  MealPlanID: number;

  @Column({ type: 'varchar', unique: true, nullable: false })
  PlanName: string;
} 