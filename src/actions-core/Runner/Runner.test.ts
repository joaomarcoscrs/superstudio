import { describe, expect, it, vi } from 'vitest';
import BaseAction from '../Actions/Base/Base';
import Runner from './Runner';

// Update TestAction to be a class with a static run method
class TestAction extends BaseAction {
  static run(...args: any[]): any {
    return args;
  }
}

describe('Runner', () => {
  it('should create a Runner instance with a TestAction class', () => {
    const runner = new Runner(TestAction);
    expect(runner).toBeInstanceOf(Runner);
  });

  it('should call the static run method of the provided action class', () => {
    const runSpy = vi.spyOn(TestAction, 'run');

    const runner = new Runner(TestAction);
    const args = [1, 'test', { key: 'value' }];

    runner.run(...args);

    expect(runSpy).toHaveBeenCalledTimes(1);
    expect(runSpy).toHaveBeenCalledWith(...args);
  });

  it("should pass multiple arguments to the action's static run method", () => {
    const runner = new Runner(TestAction);
    const result = runner.run(1, 'test', true, { key: 'value' });

    expect(result).toEqual([1, 'test', true, { key: 'value' }]);
  });
});
