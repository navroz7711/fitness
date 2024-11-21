import { WorkoutService } from './workout.service';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { Workout } from './workout.entity';
export declare class WorkoutController {
    private readonly workoutService;
    constructor(workoutService: WorkoutService);
    create(createWorkoutDto: CreateWorkoutDto): Promise<Workout>;
    findAll(): Promise<Workout[]>;
    findOne(id: number): Promise<Workout>;
}
