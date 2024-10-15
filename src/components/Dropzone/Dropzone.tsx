import { useRef } from 'react';
import { faArrowUpFromBracket, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Group, rem, Text, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { Dropzone as MantineDropzone, MIME_TYPES } from '@mantine/dropzone';
import { OpenDropzoneFilePicker } from '@/actions-core';
import Button, { ButtonProps } from '../Button/Button';

interface DropzoneProps {
  text?: {
    accept: string;
    reject: string;
    idle: string;
  };
  label: string;
  onDrop: (files: File[]) => void;
  button?: ButtonProps;
  style?: React.CSSProperties;
  className?: string;
}

const ICON_SIZE = {
  width: rem(18),
  height: rem(18),
};

const Dropzone: React.FC<DropzoneProps> = ({ text, label, onDrop, button, style, className }) => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const openRef = useRef<() => void>(null);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className={`relative border border-dashed rounded-md cursor-pointer flex items-center justify-center
      ${colorScheme === 'dark' ? 'border-dark-300' : 'border-gray-400 hover:border-purboflow-500 text-gray-500 hover:text-purboflow-500 hover:bg-purboflow-50'} 
      ${className}`}
      style={style}
      onClick={(e) => {
        e.stopPropagation();
        openRef.current?.();
      }}
    >
      <MantineDropzone
        openRef={openRef}
        onDrop={onDrop}
        className="flex w-full flex-col items-center p-2"
        radius="md"
        accept={[MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.webp]}
        maxSize={2 * 1024 ** 2}
      >
        <div className="flex flex-col items-center justify-center w-full gap-2 p-4">
          <Group justify="center" align="center">
            <MantineDropzone.Accept>
              <FontAwesomeIcon icon={faCheck} style={ICON_SIZE} color={theme.colors.purboflow[6]} />
            </MantineDropzone.Accept>
            <MantineDropzone.Reject>
              <FontAwesomeIcon icon={faXmark} style={ICON_SIZE} color={theme.colors.red[6]} />
            </MantineDropzone.Reject>
            <MantineDropzone.Idle>
              <FontAwesomeIcon icon={faArrowUpFromBracket} style={ICON_SIZE} />
            </MantineDropzone.Idle>
          </Group>

          {text && (
            <Text ta="center" fw={700} fz="xs">
              <MantineDropzone.Accept>{text.accept}</MantineDropzone.Accept>
              <MantineDropzone.Reject>{text.reject}</MantineDropzone.Reject>
              <MantineDropzone.Idle>{text.idle}</MantineDropzone.Idle>
            </Text>
          )}
          <Text ta="center" fz={rem(10)} className="">
            {label}
          </Text>

          {button && (
            <Button
              action={OpenDropzoneFilePicker}
              actionArgs={[openRef]}
              size={button.size}
              radius={button.radius}
              {...button}
            >
              {button.label}
            </Button>
          )}
        </div>
      </MantineDropzone>
    </div>
  );
};

export default Dropzone;
