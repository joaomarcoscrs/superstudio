import React, { Suspense } from 'react';
import { Loader, Paper, Text } from '@mantine/core';
import { interfaceMap, PropertyParser } from './helpers/index';

interface ComponentConfig {
  id: string;
  type: string;
  className?: string;
  properties?: Record<string, any>;
  children?: ComponentConfig[];
}

interface RendererProps {
  config: {
    layout: ComponentConfig[];
  };
}

const Renderer: React.FC<RendererProps> = ({ config }) => {
  const renderInterface = (interfaceConfig: ComponentConfig) => {
    const UIComponent = interfaceMap[interfaceConfig.type as keyof typeof interfaceMap];

    if (UIComponent) {
      return (
        <Suspense
          fallback={
            <div key={interfaceConfig.id} className="flex flex-grow items-center justify-center">
              <Loader />
            </div>
          }
          key={interfaceConfig.id}
        >
          <UIComponent
            key={interfaceConfig.id}
            interfaceId={interfaceConfig.id}
            className={interfaceConfig.className || 'flex items-center justify-center'}
            {...PropertyParser.parse(interfaceConfig.properties || {})}
          />
        </Suspense>
      );
    }

    return (
      <Paper
        key={interfaceConfig.id}
        className={interfaceConfig.className || 'flex items-center justify-center'}
        p="md"
      >
        <Text>Unknown UI type: {interfaceConfig.type}</Text>
        <Text>{JSON.stringify(interfaceConfig)}</Text>
      </Paper>
    );
  };

  return <div className="w-full h-full flex flex-col">{config.layout.map(renderInterface)}</div>;
};

export default Renderer;
