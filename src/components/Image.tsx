import React from "react";

export interface ImageProps {
  src: string;
  alt: string;
  style?: React.CSSProperties;
}

const Image: React.FC<ImageProps> = ({ src, alt, style }) => {
  return <img src={src} alt={alt} style={{ ...style, objectFit: "cover" }} />;
};

export default Image;
