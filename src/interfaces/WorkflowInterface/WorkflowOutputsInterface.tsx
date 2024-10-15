import React from 'react';
import JsonInput from '@/components/JsonInput/JsonInput';

export interface WorkflowOutputsInterfaceProps {
  workflowId: string;
  className?: string;
  output: Record<string, any>;
}

const WorkflowOutputsInterface: React.FC<WorkflowOutputsInterfaceProps> = ({
  workflowId,
  className,
  output,
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-2 font-mono">
      <JsonInput value={output} onChange={() => {}} />
    </div>
  );
};

export default WorkflowOutputsInterface;
