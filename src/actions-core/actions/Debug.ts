import BaseAction from './Base';

class Debug extends BaseAction {
  run(...args: any[]) {
    console.log('Action being run', ...args);
  }
}

export default Debug;
