import { describe, expect, it, vi } from 'vitest';
import Debug from './Debug';

describe('Debug', () => {
  it('should be defined', () => {
    expect(Debug).toBeDefined();
  });

  it('should have a static run method', () => {
    expect(Debug.run).toBeInstanceOf(Function);
  });

  it('should log to console when static run method is called', () => {
    const consoleSpy = vi.spyOn(console, 'log');

    Debug.run('test');

    expect(consoleSpy).toHaveBeenCalledWith('Action being run', 'test');
    consoleSpy.mockRestore();
  });

  it('should handle multiple arguments', () => {
    const consoleSpy = vi.spyOn(console, 'log');

    Debug.run('arg1', 2, { key: 'value' });

    expect(consoleSpy).toHaveBeenCalledWith('Action being run', 'arg1', 2, { key: 'value' });
    consoleSpy.mockRestore();
  });

  it('should handle no arguments', () => {
    const consoleSpy = vi.spyOn(console, 'log');

    Debug.run();

    expect(consoleSpy).toHaveBeenCalledWith('Action being run');
    consoleSpy.mockRestore();
  });

  it('should return the arguments passed to run', () => {
    const result = Debug.run('arg1', 2, { key: 'value' });
    expect(result).toEqual(['arg1', 2, { key: 'value' }]);
  });
});
