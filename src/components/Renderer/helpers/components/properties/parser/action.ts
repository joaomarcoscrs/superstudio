import { BaseAction, Debug, OpenDropzoneFilePicker } from '@/actions-core';

class ActionParser {
  private static actionsMap: Record<string, typeof BaseAction> = {
    debug: Debug,
    openDropzoneFilePicker: OpenDropzoneFilePicker,
  };

  static parse(action: string): BaseAction | undefined {
    return this.actionsMap[action];
  }
}

export default ActionParser;
