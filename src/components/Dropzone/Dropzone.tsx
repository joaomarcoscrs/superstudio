import { useRef } from 'react';
import { faCloudArrowUp, faDownload, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Group, rem, Text, useMantineTheme } from '@mantine/core';
import { Dropzone as MantineDropzone, MIME_TYPES } from '@mantine/dropzone';
import Button, { ButtonProps } from '../Button/Button';
import classes from './Dropzone.module.css';

interface DropzoneProps {
  text: {
    accept: string;
    reject: string;
    idle: string;
  };
  label: string;
  onDrop: (files: File[]) => void;
  button?: ButtonProps;
  style?: React.CSSProperties;
}

const Dropzone: React.FC<DropzoneProps> = ({ text, label, onDrop, button, style }) => {
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
            {label}
          </Text>
        </div>
      </MantineDropzone>

      {button && (
        <Button
          onClick={() => openRef.current?.()}
          className={classes.control}
          size={button.size}
          radius={button.radius}
          {...button}
        >
          {button.label}
        </Button>
      )}
    </div>
  );
};

export default Dropzone;
