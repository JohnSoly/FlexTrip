import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Employee } from '../employee/employee.entity';
import { Role } from '../role/role.entity';
import { Team } from '../team/team.entity';
import { PasswordUtil } from '../utils/password.util';

async function createEmployee() {
  const app = await NestFactory.createApplicationContext(AppModule);
  
  try {
    const employeeRepo = app.get(getRepositoryToken(Employee));
    const roleRepo = app.get(getRepositoryToken(Role));
    const teamRepo = app.get(getRepositoryToken(Team));

    // Create a test role if it doesn't exist
    let adminRole = await roleRepo.findOne({ where: { RoleName: 'Admin' } });
    if (!adminRole) {
      adminRole = roleRepo.create({
        RoleName: 'Admin',
        RoleDescription: 'Administrator role'
      });
      await roleRepo.save(adminRole);
      console.log('Created Admin role');
    }

    // Create a test team if it doesn't exist
    let adminTeam = await teamRepo.findOne({ where: { TeamName: 'Admin Team' } });
    if (!adminTeam) {
      adminTeam = teamRepo.create({
        TeamName: 'Admin Team',
        TeamDescription: 'Administrative team'
      });
      await teamRepo.save(adminTeam);
      console.log('Created Admin Team');
    }

    // Check if employee already exists
    const existingEmployee = await employeeRepo.findOne({
      where: { Email: 'admin@flextrip.com' }
    });

    if (existingEmployee) {
      console.log('Employee already exists');
      return;
    }

    // Hash the password
    const hashedPassword = await PasswordUtil.hashPassword('admin123');

    // Create the employee
    const employee = employeeRepo.create({
      FirstName: 'Admin',
      LastName: 'User',
      Email: 'admin@flextrip.com',
      Password: hashedPassword,
      PhoneNumber: '+1234567890',
      NationalID: 'ADMIN001',
      JoinedDate: new Date(),
      RoleID: adminRole.RoleID,
      TeamID: adminTeam.TeamID,
    });

    await employeeRepo.save(employee);
    console.log('Employee created successfully');
    console.log('Email: admin@flextrip.com');
    console.log('Password: admin123');

  } catch (error) {
    console.error('Error creating employee:', error);
  } finally {
    await app.close();
  }
}

createEmployee(); 