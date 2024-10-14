import BaseAction from '../Actions/Base/Base';

class Runner {
  private Action: typeof BaseAction;

  constructor(Action: typeof BaseAction) {
    this.Action = Action;
  }

  run(...args: any[]) {
    return this.Action.run(...args);
  }
}

export default Runner;
