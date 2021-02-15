import { CreateDogDTO } from './create-dog-dto';

describe('CreateDogDto', () => {
  it('should be defined', () => {
    expect(new CreateDogDTO()).toBeDefined();
  });
});
