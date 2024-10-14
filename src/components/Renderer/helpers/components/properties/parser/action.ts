import { BaseAction, Debug, OpenDropzoneFilePicker } from '@/actions-core';

class ActionParser {
  private static actionsMap: Record<string, BaseAction> = {
    debug: new Debug(),
    openDropzoneFilePicker: new OpenDropzoneFilePicker(),
  };

  static parse(action: string): BaseAction | undefined {
    return this.actionsMap[action];
  }
}

export default ActionParser;
