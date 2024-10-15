import React from 'react';
import WorkflowInputsInterface from './WorkflowInputsInterface';
import WorkflowOutputsInterface from './WorkflowOutputsInterface';
import WorkflowTopbarInterface from './WorkflowTopbarInterface';

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
    <div id={interfaceId} className={`flex flex-col ${className || ''}`}>
      <WorkflowTopbarInterface workflowId={workflowId} />
      <div className="flex flex-grow flex-col md:flex-row">
        <WorkflowInputsInterface workflowId={workflowId} />
        <WorkflowOutputsInterface
          workflowId={workflowId}
          output={{
            key1: 'value1',
            key2: 'value2',
          }}
        />
      </div>
    </div>
  );
};

export default WorkflowInterface;
