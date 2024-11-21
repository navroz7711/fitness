import { Workout } from './workout.entity';
export declare class Exercise {
    id: number;
    name: string;
    repetitions: number;
    sets: number;
    workout: Workout;
}
