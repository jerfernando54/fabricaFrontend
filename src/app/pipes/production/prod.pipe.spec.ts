import { ProdPipe } from './prod.pipe';

describe('ProdPipe', () => {
  it('create an instance', () => {
    const pipe = new ProdPipe();
    expect(pipe).toBeTruthy();
  });
});
