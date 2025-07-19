import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { Role } from '../role/role.entity';
import { Team } from '../team/team.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Employee, Role, Team]),
  ],
  exports: [TypeOrmModule],
})
export class EmployeeModule {} 