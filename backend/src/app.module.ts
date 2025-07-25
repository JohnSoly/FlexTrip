// backend/src/app.module.ts

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryModule } from './country/country.module'; // Import the new CountryModule
import { AuthModule } from './auth/auth.module'; // Import the new AuthModule
import { EmployeeModule } from './employee/employee.module'; // Import the new EmployeeModule
import { RoleModule } from './role/role.module'; // Import the new RoleModule
import { TeamModule } from './team/team.module'; // Import the new TeamModule
import { RoomTypeModule } from './room-type/room-type.module';
import { CompanyModule } from './company/company.module';
import { HotelModule } from './hotel/hotel.module';
import { CustomerModule } from './customer/customer.module';
import { ClientModule } from './client/client.module';
import { CityModule } from './city/city.module';
import { BookingModule } from './booking/booking.module';
import { SupplierModule } from './supplier/supplier.module';
import { DriverModule } from './driver/driver.module';

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
    RoomTypeModule,
    CompanyModule,
    HotelModule,
    CustomerModule,
    ClientModule,
    CityModule,
    BookingModule,
    SupplierModule,
    DriverModule,
  ],
  controllers: [], // We are not using the default AppController
  providers: [],   // We are not using the default AppService
})
export class AppModule {}
