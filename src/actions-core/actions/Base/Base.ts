abstract class BaseAction {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static run(...args: any[]): any {
    throw new Error('Method not implemented');
  }
}

export default BaseAction;
