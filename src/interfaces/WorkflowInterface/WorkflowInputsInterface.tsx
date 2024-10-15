import React from 'react';
import { faFileImage } from '@fortawesome/free-regular-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from '@mantine/hooks';
import { Debug } from '@/actions-core';
import Button from '@/components/Button/Button';
import Dropzone from '@/components/Dropzone/Dropzone';
import Image from '@/components/Image/Image';

export interface WorkflowInputsInterfaceProps {
  workflowId: string;
  className?: string;
}

const WorkflowInputsInterface: React.FC<WorkflowInputsInterfaceProps> = ({ workflowId }) => {
  const imageSrc =
    'https://www.cattales.org/wp-content/uploads/sites/499/2023/07/Raccoons-7-6-23-scaled-e1689450033742.jpg';
  const imageAlt = 'Cute raccoon';
  const isSmallScreen = useMediaQuery('(max-width: 640px)');

  return (
    <div className="flex flex-col md:w-1/3 gap-2 p-2">
      <div className="flex h-1/2 sm:h-1/4 md:h-full md:flex-col items-center justify-center w-full gap-2">
        <Image src={imageSrc} alt={imageAlt} className="md:w-full h-auto object-cover rounded" />
        <Dropzone
          className="w-full h-full bg-gray-100"
          label="Drop or upload an image here"
          button={{
            size: isSmallScreen ? 'compact-xs' : 'xs',
            radius: 'md',
            label: 'Browse file',
            icon: faFileImage,
            variant: isSmallScreen ? 'subtle' : 'light',
          }}
          onDrop={(stuff) => {
            console.log(`Dropped files`, stuff);
          }}
        />
      </div>
      <Button
        label="Run Workflow"
        icon={faPlay}
        radius="md"
        action={Debug}
        actionArgs={['running workflow', workflowId]}
      />
    </div>
  );
};

export default WorkflowInputsInterface;
