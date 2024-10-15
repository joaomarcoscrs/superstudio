import React from 'react';

export interface WorkflowOutputsInterfaceProps {
  workflowId: string;
  className?: string;
}

const WorkflowOutputsInterface: React.FC<WorkflowOutputsInterfaceProps> = ({
  workflowId,
  className,
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-2 font-mono">
      output here
    </div>
  );
};

export default WorkflowOutputsInterface;
