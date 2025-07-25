import { Controller, Get } from '@nestjs/common';
import { RoleService } from './role.service';
import { Role } from './role.entity';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get()
  async findAll(): Promise<Role[]> {
    return this.roleService.findAll();
  }
} 