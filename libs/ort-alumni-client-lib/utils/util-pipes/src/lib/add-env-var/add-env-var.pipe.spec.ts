import { AddEnvVarPipe } from './add-env-var.pipe';

describe('AddEnvVarPipe', () => {
  it('create an instance', () => {
    const pipe = new AddEnvVarPipe();
    expect(pipe).toBeTruthy();
  });
});
