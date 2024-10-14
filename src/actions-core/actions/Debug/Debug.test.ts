import { describe, expect, it, vi } from 'vitest';
import Debug from './Debug';

describe('Debug', () => {
  it('should be defined', () => {
    expect(Debug).toBeDefined();
  });

  it('should be instantiable', () => {
    const debug = new Debug();
    expect(debug).toBeInstanceOf(Debug);
  });

  it('should log to console when run method is called', () => {
    const debug = new Debug();
    const consoleSpy = vi.spyOn(console, 'log');

    debug.run('test');

    expect(consoleSpy).toHaveBeenCalledWith('Action being run', 'test');
    consoleSpy.mockRestore();
  });

  it('should handle multiple arguments', () => {
    const debug = new Debug();
    const consoleSpy = vi.spyOn(console, 'log');

    debug.run('arg1', 2, { key: 'value' });

    expect(consoleSpy).toHaveBeenCalledWith('Action being run', 'arg1', 2, { key: 'value' });
    consoleSpy.mockRestore();
  });

  it('should handle no arguments', () => {
    const debug = new Debug();
    const consoleSpy = vi.spyOn(console, 'log');

    debug.run();

    expect(consoleSpy).toHaveBeenCalledWith('Action being run');
    consoleSpy.mockRestore();
  });
});
