import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsString } from 'class-validator';

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

declare enum ServiceType {
  HEATING = 'Heating',
  VENTILATION = 'Ventilation',
  AIR_CONDITIONING = 'Air Conditioning',
  REFRIDGERATION = 'Refridgeration',
}

declare enum BuildingType {
  HOUSE = 'House',
  APARTMEN = 'Apartment',
  COMMERCIAL = 'Commercial',
  INDUSTRIAL = 'Industrial',
}

declare enum DayPeriod {
  AS_SOON_AS_POSSIBLE = 'As soon as possible',
  MORNING = 'Morning',
  AFTERNOON = 'Afternoon',
  EVENING = 'Evening',
}

declare enum ContactMethod {
  PHONE = 'Phone',
  EMAIL = 'Email',
}
