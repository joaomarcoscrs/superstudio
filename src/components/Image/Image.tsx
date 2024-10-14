import React from 'react';
import { Image as MantineImage, ImageProps as MantineImageProps } from '@mantine/core';

interface ImageProps extends MantineImageProps {
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

const Image: React.FC<ImageProps> = ({ fit, style, ...props }) => {
  const combinedStyle = {
    ...style,
    objectFit: fit,
  };

  return <MantineImage style={combinedStyle} {...props} />;
};

export default Image;
