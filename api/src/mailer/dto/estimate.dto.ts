import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsString } from 'class-validator';
import { BuildingType, ContactMethod, DayPeriod, ServiceType } from '../../constants';

export class EstimateDTO {
  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsString()
  phoneNumber: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  address: string;

  @ApiProperty({ enum: ServiceType })
  @IsEnum(ServiceType)
  serviceType: ServiceType;

  @ApiProperty({ enum: BuildingType })
  @IsEnum(BuildingType)
  buildingType: BuildingType;

  @ApiProperty({ enum: DayPeriod })
  @IsEnum(DayPeriod)
  apptTime: DayPeriod;

  @ApiProperty({ enum: ContactMethod })
  @IsEnum(ContactMethod)
  contactMethod: ContactMethod;
}

