import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkoutModule } from './workout/workout.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',   // Update as per your PostgreSQL configuration
      port: 5432,
      username: 'postgres',
      password: 'your password',
      database: 'database name',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,  // Don't use in production, set to false for migrations
    }),
    WorkoutModule,
  ],
})
export class AppModule {}

