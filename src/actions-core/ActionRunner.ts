import BaseAction from './actions/Base/Base';

class ActionRunner {
  private action: BaseAction;

  constructor(executor: BaseAction) {
    this.action = executor;
  }

  run(...args: any[]) {
    this.action.run(...args);
  }
}

export default ActionRunner;
