import { Module } from '@nestjs/common';
import { Cat } from './providers/cat';
import { CatService } from './services/cat/cat.service';
import { CatController } from './api/cat/cat.controller';

@Module({
  providers: [Cat, CatService],
  controllers: [CatController]
})
export class DogsModule {}
