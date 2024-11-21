import { IsString, IsInt } from 'class-validator';

export class CreateExerciseDto {
  @IsString()
  name: string;

  @IsInt()
  repetitions: number;

  @IsInt()
  sets: number;
}
