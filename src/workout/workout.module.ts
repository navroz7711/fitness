import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Workout } from './workout.entity';
import { Exercise } from './exercise.entity';
import { WorkoutService } from './workout.service';
import { ExerciseService } from './exercise.service';
import { WorkoutController } from './workout.controller';
import { ExerciseController } from './exercise.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Workout, Exercise])],
  controllers: [WorkoutController, ExerciseController],
  providers: [WorkoutService, ExerciseService],
})
export class WorkoutModule {}
