import { CatSchema } from './cat-schema';

describe('CatSchema', () => {
  it('should be defined', () => {
    expect(new CatSchema()).toBeDefined();
  });
});
