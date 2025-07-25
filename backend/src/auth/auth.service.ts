import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from '../employee/employee.entity';
import { SignInDto } from './dto/signin.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
    private jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto) {
    const { username, password } = signInDto;

    // Find employee by username
    const employee = await this.employeeRepository.findOne({
      where: { username: username },
      relations: ['role', 'team'],
    });

    if (!employee) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, employee.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Generate JWT payload
    const payload = {
      sub: employee.EmployeeID,
      username: employee.username,
      roleId: employee.RoleID,
      teamId: employee.TeamID,
      firstName: employee.FirstName,
      lastName: employee.LastName,
    };

    // Generate JWT token
    const token = this.jwtService.sign(payload);

    return {
      access_token: token,
      employee: {
        id: employee.EmployeeID,
        username: employee.username,
        firstName: employee.FirstName,
        lastName: employee.LastName,
        role: employee.role,
        team: employee.team,
      },
    };
  }
} 