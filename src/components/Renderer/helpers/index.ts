import { lazy } from 'react';
import PropertyParser from './components/properties/parser';

const componentMap: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
  button: lazy(() => import('../../Button/Button')),
  dropzone: lazy(() => import('../../Dropzone/Dropzone')),
  image: lazy(() => import('../../Image/Image')),
};

export { componentMap, PropertyParser };
