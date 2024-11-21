import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Workout } from './workout.entity';
import { CreateWorkoutDto } from './dto/create-workout.dto';

@Injectable()
export class WorkoutService {
  constructor(
    @InjectRepository(Workout)
    private workoutRepository: Repository<Workout>,
  ) {}

  async create(createWorkoutDto: CreateWorkoutDto): Promise<Workout> {

    const workout = this.workoutRepository.create(createWorkoutDto);
    return await this.workoutRepository.save(workout);
  }

  async findAll(): Promise<Workout[]> {
    return await this.workoutRepository.find({ relations: ['exercises'] });
  }

  async findOne(id: number): Promise<Workout> {
    return await this.workoutRepository.findOne({ where: { id }, relations: ['exercises'] });
  }
}
