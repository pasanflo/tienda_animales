import { Module } from '@nestjs/common';
import { DogProvider } from './providers/dog';
import { DogService } from './services/dog/dog.service';
import { DogController } from './api/dog/dog.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...DogProvider, DogService],
  controllers: [DogController],
})
export class DogsModule {}
