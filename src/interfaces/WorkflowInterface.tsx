import React from 'react';
import { Debug } from '@/actions-core';
import Button from '@/components/Button/Button';
import Dropzone from '@/components/Dropzone/Dropzone';
import Image from '@/components/Image/Image';

export interface WorkflowInterfaceProps {
  uiId: string;
  workflowId: string;
  className?: string;
  imageSrc: string;
  imageAlt: string;
  dropzoneText: {
    accept: string;
    reject: string;
    idle: string;
  };
  dropzoneLabel: string;
  buttonLabel: string;
}

const WorkflowInterface: React.FC<WorkflowInterfaceProps> = ({
  uiId,
  workflowId,
  className,
  imageSrc,
  imageAlt,
  dropzoneText,
  dropzoneLabel,
  buttonLabel,
}) => {
  return (
    <div id={uiId} className={`flex flex-col md:flex-row ${className || ''}`}>
      <div className="flex flex-col w-1/3 gap-4">
        <Image src={imageSrc} alt={imageAlt} className="w-full h-auto object-cover" />
        <Dropzone
          text={dropzoneText}
          label={dropzoneLabel}
          button={{
            size: 'md',
            radius: 'md',
            label: 'Select files',
          }}
          onDrop={(stuff) => {
            console.log(`Dropped files`, stuff);
          }}
        />
        <Button label={buttonLabel} action={Debug} actionArgs={['running workflow', workflowId]} />
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-4">output here</div>
    </div>
  );
};

export default WorkflowInterface;
