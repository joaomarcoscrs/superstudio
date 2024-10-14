import { lazy } from 'react';
import { BaseAction, Debug, OpenDropzoneFilePicker } from '@/actions-core';

const componentMap: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
  button: lazy(() => import('../Button/Button')),
  dropzone: lazy(() => import('../Dropzone/Dropzone')),
  image: lazy(() => import('../Image/Image')),
};

function parseComponentAction(action: string) {
  const actionsMap: Record<string, BaseAction> = {
    debug: new Debug(),
    openDropzoneFilePicker: new OpenDropzoneFilePicker(),
  };

  return actionsMap[action];
}

function parseComponentProperties(properties: Record<string, any>) {
  const parsers: Record<string, (value: any) => any> = {
    action: parseComponentAction,
  };
  const props: Record<string, any> = {};

  for (const key in properties) {
    const value = properties[key];
    if (parsers[key]) {
      props[key] = parsers[key](value);
    } else {
      props[key] = value;
    }
  }

  return props;
}

export { componentMap, parseComponentProperties };
