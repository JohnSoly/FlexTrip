import { IsString, IsOptional, IsNumber, IsDateString } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  FirstName: string;

  @IsString()
  LastName: string;

  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsString()
  @IsOptional()
  PhoneNumber?: string;

  @IsString()
  @IsOptional()
  NationalID?: string;

  @IsDateString()
  @IsOptional()
  JoinedDate?: string;

  @IsNumber()
  RoleID: number;

  @IsNumber()
  TeamID: number;
} 