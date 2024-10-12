import React from 'react';
import { Button, Image, Paper, Text } from '@mantine/core';
import { Dropzone } from '../Dropzone/Dropzone';

interface LayoutConfig {
  columns: number;
  rowHeight: number;
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
const Renderer: React.FC<RendererProps> = ({ config }) => {
  const { layout, components } = config;
  const renderComponent = (component: ComponentConfig) => {
    const style: React.CSSProperties = {
      position: 'absolute',
      left: `${(component.x / layout.columns) * 100}%`,
      top: `${component.y * layout.rowHeight}px`,
      width: `${(component.width / layout.columns) * 100}%`,
      height: `${component.height * layout.rowHeight}px`,
    };
    switch (component.type) {
      case 'button':
        return (
          <Button
            key={component.id}
            style={style}
            onClick={() =>
              console.log(
                `Action: ${component.properties.action}, WorkflowId: ${component.properties.workflowId}`
              )
            }
          >
            {component.properties.text}
          </Button>
        );
      case 'dropzone':
        return (
          <Dropzone
            key={component.id}
            style={style}
            onDrop={(files) => console.log('Dropped files:', files)}
            text={component.properties.text}
            button={component.properties.button}
          />
        );
      case 'image':
        return (
          <Image
            key={component.id}
            src={component.properties.src}
            alt={component.properties.alt}
            style={style}
            fit="contain"
          />
        );
      default:
        return (
          <Paper key={component.id} style={style} p="md">
            <Text>Unknown component type: {component.type}</Text>
            <Text>{JSON.stringify(component)}</Text>
          </Paper>
        );
    }
  };
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {components.map(renderComponent)}
    </div>
  );
};

export default Renderer;
