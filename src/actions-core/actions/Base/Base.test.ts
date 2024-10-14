import { describe, expect, it } from 'vitest';
import BaseAction from './Base';

describe('BaseAction', () => {
  it('should be defined', () => {
    expect(BaseAction).toBeDefined();
  });

  it('should be instantiable', () => {
    const baseAction = new BaseAction();
    expect(baseAction).toBeInstanceOf(BaseAction);
  });

  it('should throw an error when run method is called', () => {
    const baseAction = new BaseAction();
    expect(() => baseAction.run()).toThrowError('Method not implemented');
  });

  it('should throw an error with any number of arguments', () => {
    const baseAction = new BaseAction();
    expect(() => baseAction.run('arg1', 2, true)).toThrowError('Method not implemented');
  });
});
