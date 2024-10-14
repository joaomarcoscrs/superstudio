import BaseAction from '../Base/Base';

class Debug extends BaseAction {
  run(...args: any[]) {
    // eslint-disable-next-line no-console
    console.log('Action being run', ...args);
    return args;
  }
}

export default Debug;
