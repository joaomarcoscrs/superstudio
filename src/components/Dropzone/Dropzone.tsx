import { useRef } from 'react';
import { faCloudArrowUp, faDownload, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Group, rem, Text, useMantineTheme } from '@mantine/core';
import { Dropzone as MantineDropzone, MIME_TYPES } from '@mantine/dropzone';
import classes from './Dropzone.module.css';

interface DropzoneProps {
  text: {
    accept: string;
    reject: string;
    idle: string;
    main: string;
  };
  onDrop: (files: File[]) => void;
  button?: {
    size: string;
    radius: string;
    text: string;
  };
  style?: React.CSSProperties;
}

export function Dropzone({ text, onDrop, button, style }: DropzoneProps) {
  const theme = useMantineTheme();
  const openRef = useRef<() => void>(null);

  return (
    <div className={classes.wrapper} style={style}>
      <MantineDropzone
        openRef={openRef}
        onDrop={onDrop}
        className={classes.dropzone}
        radius="md"
        accept={[MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.webp]}
        maxSize={2 * 1024 ** 2}
      >
        <div style={{ pointerEvents: 'none' }}>
          <Group justify="center">
            <MantineDropzone.Accept>
              <FontAwesomeIcon
                icon={faDownload}
                style={{ width: rem(50), height: rem(50) }}
                color={theme.colors.blue[6]}
              />
            </MantineDropzone.Accept>
            <MantineDropzone.Reject>
              <FontAwesomeIcon
                icon={faXmark}
                style={{ width: rem(50), height: rem(50) }}
                color={theme.colors.red[6]}
              />
            </MantineDropzone.Reject>
            <MantineDropzone.Idle>
              <FontAwesomeIcon icon={faCloudArrowUp} style={{ width: rem(50), height: rem(50) }} />
            </MantineDropzone.Idle>
          </Group>

          <Text ta="center" fw={700} fz="lg" mt="xl">
            <MantineDropzone.Accept>{text.accept}</MantineDropzone.Accept>
            <MantineDropzone.Reject>{text.reject}</MantineDropzone.Reject>
            <MantineDropzone.Idle>{text.idle}</MantineDropzone.Idle>
          </Text>
          <Text ta="center" fz="sm" mt="xs" c="dimmed">
            {text.main}
          </Text>
        </div>
      </MantineDropzone>

      {button && (
        <Button
          className={classes.control}
          size={button.size}
          radius={button.radius}
          onClick={() => openRef.current?.()}
        >
          {button.text}
        </Button>
      )}
    </div>
  );
}
