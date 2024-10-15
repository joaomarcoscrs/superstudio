import React from 'react';
import WorkflowInputsInterface from './WorkflowInputsInterface';
import WorkflowOutputsInterface from './WorkflowOutputsInterface';

export interface WorkflowInterfaceProps {
  interfaceId: string;
  workflowId: string;
  className?: string;
}

const WorkflowInterface: React.FC<WorkflowInterfaceProps> = ({
  interfaceId,
  workflowId,
  className,
}) => {
  return (
    <div id={interfaceId} className={`flex flex-col md:flex-row ${className || ''}`}>
      <WorkflowInputsInterface workflowId={workflowId} />
      <WorkflowOutputsInterface
        workflowId={workflowId}
        output={{
          key1: 'value1',
          key2: 'value2',
        }}
      />
    </div>
  );
};

export default WorkflowInterface;
