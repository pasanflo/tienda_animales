import { DogSchema } from './dog-schema';

describe('DogSchema', () => {
  it('should be defined', () => {
    expect(new DogSchema()).toBeDefined();
  });
});
