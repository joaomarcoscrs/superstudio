import React, { lazy, Suspense } from 'react';
import { Paper, Text } from '@mantine/core';

const DEFAULT_LAYOUT = {
  columns: 12,
  rowHeight: 50,
};

interface LayoutConfig {
  columns?: number;
  rowHeight?: number;
}
interface ComponentConfig {
  id: string;
  type: string;
  x: number;
  y: number;
  width: number;
  height: number;
  properties: Record<string, any>;
}
interface RendererProps {
  config: {
    layout: LayoutConfig;
    components: ComponentConfig[];
  };
}

const componentMap: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
  button: lazy(() => import('../Button/Button')),
  dropzone: lazy(() => import('../Dropzone/Dropzone')),
  image: lazy(() => import('../Image/Image')),
};

const Renderer: React.FC<RendererProps> = ({ config }) => {
  const { layout, components } = config;

  const renderComponent = (component: ComponentConfig) => {
    const style: React.CSSProperties = {
      position: 'absolute',
      left: `${(component.x / (layout.columns || DEFAULT_LAYOUT.columns)) * 100}%`,
      top: `${component.y * (layout.rowHeight || DEFAULT_LAYOUT.rowHeight)}px`,
      width: `${(component.width / (layout.columns || DEFAULT_LAYOUT.columns)) * 100}%`,
      height: `${component.height * (layout.rowHeight || DEFAULT_LAYOUT.rowHeight)}px`,
    };

    const DynamicComponent = componentMap[component.type];

    if (DynamicComponent) {
      return (
        <Suspense
          fallback={
            <div key={component.id} style={style}>
              Loading...
            </div>
          }
          key={component.id}
        >
          <DynamicComponent key={component.id} style={style} {...component.properties} />
        </Suspense>
      );
    }

    return (
      <Paper key={component.id} style={style} p="md">
        <Text>Unknown component type: {component.type}</Text>
        <Text>{JSON.stringify(component)}</Text>
      </Paper>
    );
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {components.map(renderComponent)}
    </div>
  );
};

export default Renderer;
