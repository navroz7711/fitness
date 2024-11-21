import { Repository } from 'typeorm';
import { Workout } from './workout.entity';
import { CreateWorkoutDto } from './dto/create-workout.dto';
export declare class WorkoutService {
    private workoutRepository;
    constructor(workoutRepository: Repository<Workout>);
    create(createWorkoutDto: CreateWorkoutDto): Promise<Workout>;
    findAll(): Promise<Workout[]>;
    findOne(id: number): Promise<Workout>;
}
