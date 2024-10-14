import BaseAction from '../Actions/Base/Base';

class Runner {
  private action: BaseAction;

  constructor(executor: BaseAction) {
    this.action = executor;
  }

  run(...args: any[]) {
    return this.action.run(...args);
  }
}

export default Runner;
