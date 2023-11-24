import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class ParentChildDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  parentId: string;

  @IsString()
  @IsNotEmpty()
  @IsUUID()
  childId: string;
}
