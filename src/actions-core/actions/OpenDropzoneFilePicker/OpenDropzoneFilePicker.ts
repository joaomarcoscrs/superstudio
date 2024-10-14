import { DropzoneProps } from '@mantine/dropzone';
import BaseAction from '../Base/Base';

class OpenDropzoneFilePicker extends BaseAction {
  static run(ref: DropzoneProps['openRef']) {
    // @ts-ignore
    ref?.current?.();
    return ref;
  }
}

export default OpenDropzoneFilePicker;
