import { describe, expect, it } from 'vitest';
import BaseAction from './Base';

describe('BaseAction', () => {
  it('should be defined', () => {
    expect(BaseAction).toBeDefined();
  });

  it('should throw an error when run method is called', () => {
    expect(() => BaseAction.run()).toThrowError('Method not implemented');
  });

  it('should throw an error with any number of arguments', () => {
    expect(() => BaseAction.run('arg1', 2, true)).toThrowError('Method not implemented');
  });
});
