import { IsString, IsInt, IsDate } from 'class-validator';

export class CreateWorkoutDto {
  @IsString()
  name: string;

  @IsInt()
  duration: number;

  @IsDate()
  date: Date;
}
