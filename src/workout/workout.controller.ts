import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { Workout } from './workout.entity';

@Controller('workouts')
export class WorkoutController {
  constructor(private readonly workoutService: WorkoutService) {}

  @Post()
  async create(@Body() createWorkoutDto: CreateWorkoutDto): Promise<Workout> {
    return this.workoutService.create(createWorkoutDto);
  }

  @Get()
  async findAll(): Promise<Workout[]> {
    return this.workoutService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Workout> {
    return this.workoutService.findOne(id);
  }
}
