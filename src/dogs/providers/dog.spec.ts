import { Test, TestingModule } from '@nestjs/testing';
import { DogProvider } from './dog';

describe('Dog', () => {
  let provider: DogProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DogProvider],
    }).compile();

    provider = module.get<Dog>(Dog);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
