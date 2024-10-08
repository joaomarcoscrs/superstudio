import React from "react";
import Button, { ButtonProps } from "./Button";
import Image, { ImageProps } from "./Image";

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
      position: "absolute",
      left: `${(component.x / layout.columns) * 100}%`,
      top: `${component.y * layout.rowHeight}px`,
      width: `${(component.width / layout.columns) * 100}%`,
      height: `${component.height * layout.rowHeight}px`,
    };

    switch (component.type) {
      case "button":
        return (
          <Button
            key={component.id}
            style={style}
            {...(component.properties as ButtonProps)}
          />
        );
      case "image":
        return (
          <Image
            key={component.id}
            style={style}
            {...(component.properties as ImageProps)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {components.map(renderComponent)}
    </div>
  );
};

export default Renderer;
