import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Exercise } from './exercise.entity';

@Entity()
export class Workout {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  duration: number;  // Duration in minutes

  @Column()
  date: Date;

  @OneToMany(() => Exercise, exercise => exercise.workout)
  exercises: Exercise[];
}
