import { IsNotEmpty, IsString } from 'class-validator';

export class ChildDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;
}
