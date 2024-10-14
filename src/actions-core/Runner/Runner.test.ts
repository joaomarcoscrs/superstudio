import { describe, expect, it, vi } from 'vitest';
import BaseAction from '../Actions/Base/Base';
import Runner from './Runner';

// Add TestAction class
class TestAction extends BaseAction {
  run(...args: any[]): any {
    return args;
  }
}

describe('Runner', () => {
  it('should create a Runner instance with a TestAction', () => {
    const mockAction = new TestAction();
    const runner = new Runner(mockAction);
    expect(runner).toBeInstanceOf(Runner);
  });

  it('should call the run method of the provided action', () => {
    const mockAction = new TestAction();
    const runSpy = vi.spyOn(mockAction, 'run');

    const runner = new Runner(mockAction);
    const args = [1, 'test', { key: 'value' }];

    runner.run(...args);

    expect(runSpy).toHaveBeenCalledTimes(1);
    expect(runSpy).toHaveBeenCalledWith(...args);
  });

  it("should pass multiple arguments to the action's run method", () => {
    const customAction = new TestAction();
    const runner = new Runner(customAction);
    const result = runner.run(1, 'test', true, { key: 'value' });

    expect(result).toEqual([1, 'test', true, { key: 'value' }]);
  });
});
