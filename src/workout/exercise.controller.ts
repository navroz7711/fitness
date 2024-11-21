import { Controller, Post, Body, Param } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { WorkoutService } from './workout.service';

@Controller('exercises')
export class ExerciseController {
  constructor(
    private readonly exerciseService: ExerciseService,
    private readonly workoutService: WorkoutService,
  ) {}

  @Post(':workoutId')
  async create(
    @Param('workoutId') workoutId: number,
    @Body() createExerciseDto: CreateExerciseDto,
  ) {
    const workout = await this.workoutService.findOne(workoutId);
    return this.exerciseService.create(createExerciseDto, workout);
  }
}
