import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  title: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  author: string;
}


