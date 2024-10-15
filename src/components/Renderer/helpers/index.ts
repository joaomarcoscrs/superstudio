import { lazy } from 'react';
import PropertyParser from './components/properties/parser';

const interfaceMap: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
  WorkflowInterface: lazy(() => import('../../../interfaces/WorkflowInterface/WorkflowInterface')),
};

export { interfaceMap, PropertyParser };
