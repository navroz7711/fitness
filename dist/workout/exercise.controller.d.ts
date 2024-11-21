import { ExerciseService } from './exercise.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { WorkoutService } from './workout.service';
export declare class ExerciseController {
    private readonly exerciseService;
    private readonly workoutService;
    constructor(exerciseService: ExerciseService, workoutService: WorkoutService);
    create(workoutId: number, createExerciseDto: CreateExerciseDto): Promise<import("./exercise.entity").Exercise>;
}
