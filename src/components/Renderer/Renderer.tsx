import React, { Suspense } from 'react';
import { Paper, Text } from '@mantine/core';
import { componentMap, PropertyParser } from './helpers/index';

interface FlexContainerConfig {
  id: string;
  type: 'flex-container';
  direction: 'row' | 'column';
  justifyContent: string;
  alignItems: string;
  children: (ComponentConfig | FlexContainerConfig)[];
}

interface ComponentConfig {
  id: string;
  type: string;
  flex?: string;
  properties?: Record<string, any>;
}

interface RendererProps {
  config: {
    layout: (FlexContainerConfig | ComponentConfig)[];
  };
}

const Renderer: React.FC<RendererProps> = ({ config }) => {
  const renderComponent = (component: ComponentConfig | FlexContainerConfig) => {
    if (component.type === 'flex-container') {
      return renderFlexContainer(component as FlexContainerConfig);
    }

    const style: React.CSSProperties = {
      flex: (component as ComponentConfig).flex || '0 1 auto',
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
          <DynamicComponent
            key={component.id}
            style={style}
            {...PropertyParser.parse((component as ComponentConfig).properties || {})}
          />
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

  const renderFlexContainer = (container: FlexContainerConfig) => {
    const style: React.CSSProperties = {
      display: 'flex',
      flexDirection: container.direction,
      justifyContent: container.justifyContent,
      alignItems: container.alignItems,
    };

    return (
      <div key={container.id} style={style}>
        {container.children.map(renderComponent)}
      </div>
    );
  };

  return <div style={{ width: '100%', height: '100%' }}>{config.layout.map(renderComponent)}</div>;
};

export default Renderer;
