import { Repository } from 'typeorm';
import { Exercise } from './exercise.entity';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { Workout } from './workout.entity';
export declare class ExerciseService {
    private exerciseRepository;
    constructor(exerciseRepository: Repository<Exercise>);
    create(createExerciseDto: CreateExerciseDto, workout: Workout): Promise<Exercise>;
    findAll(): Promise<Exercise[]>;
}
