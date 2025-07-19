// backend/src/app.module.ts

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryModule } from './country/country.module'; // Import the new CountryModule
import { AuthModule } from './auth/auth.module'; // Import the new AuthModule
import { EmployeeModule } from './employee/employee.module'; // Import the new EmployeeModule
import { RoleModule } from './role/role.module'; // Import the new RoleModule
import { TeamModule } from './team/team.module'; // Import the new TeamModule

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        autoLoadEntities: true,
        synchronize: false,
      }),
    }),
    CountryModule, // This line registers our new module with the application
    AuthModule, // This line registers our new AuthModule with the application
    EmployeeModule, // This line registers our new EmployeeModule with the application
    RoleModule, // This line registers our new RoleModule with the application
    TeamModule, // This line registers our new TeamModule with the application
  ],
  controllers: [], // We are not using the default AppController
  providers: [],   // We are not using the default AppService
})
export class AppModule {}
