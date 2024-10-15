import React, { useState } from 'react';
import {
  CloseButton,
  Image as MantineImage,
  ImageProps as MantineImageProps,
  Modal,
} from '@mantine/core';

interface ImageProps extends MantineImageProps {
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  alt?: string;
}

const Image: React.FC<ImageProps> = ({ fit = 'scale-down', style, className, alt, ...props }) => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <MantineImage
        {...props}
        className={`object-${fit} max-w-full max-h-full ${className} cursor-pointer`}
        style={{ ...style }}
        alt={alt}
        onClick={() => setOpened(true)}
      />
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        fullScreen
        centered
        padding={10}
        withCloseButton={false}
      >
        <div className="relative">
          <CloseButton
            onClick={() => setOpened(false)}
            className="absolute top-2 right-2 z-10"
            size="sm"
            variant="transparent"
          />
          <MantineImage {...props} className="w-full h-full object-contain" alt={alt} />
        </div>
      </Modal>
    </>
  );
};

export default Image;
