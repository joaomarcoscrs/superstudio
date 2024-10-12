import React from 'react';
import { Image as MantineImage, ImageProps as MantineImageProps } from '@mantine/core';

interface ImageProps extends MantineImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, ...props }) => {
  return <MantineImage src={src} alt={alt} {...props} />;
};

export default Image;
