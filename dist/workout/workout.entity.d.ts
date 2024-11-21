import { Exercise } from './exercise.entity';
export declare class Workout {
    id: number;
    name: string;
    duration: number;
    date: Date;
    exercises: Exercise[];
}
