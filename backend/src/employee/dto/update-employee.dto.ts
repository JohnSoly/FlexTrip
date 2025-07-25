import { IsString, IsOptional, IsNumber, IsDateString } from 'class-validator';

export class UpdateEmployeeDto {
  @IsString()
  @IsOptional()
  FirstName?: string;

  @IsString()
  @IsOptional()
  LastName?: string;

  @IsString()
  @IsOptional()
  username?: string;

  @IsString()
  @IsOptional()
  password?: string;

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
  @IsOptional()
  RoleID?: number;

  @IsNumber()
  @IsOptional()
  TeamID?: number;
} 