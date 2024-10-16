import React from 'react';
import { Paper, Text, useMantineColorScheme } from '@mantine/core';
import JsonInput from '@/components/JsonInput/JsonInput';
import { WorlflowPreviewOutput } from '@/types/workflow';

export interface WorkflowOutputsInterfaceProps {
  workflowId: string;
  className?: string;
  output?: WorlflowPreviewOutput;
}

const WorkflowOutputsInterface: React.FC<WorkflowOutputsInterfaceProps> = ({
  workflowId,
  className,
  output,
}) => {
  const { colorScheme } = useMantineColorScheme();

  if (!output) {
    return (
      <Paper className="flex flex-col items-center justify-center w-full h-full gap-2 font-mono">
        <Text
          className={`${colorScheme === 'dark' ? 'text-gray-400' : 'text-gray-500'} font-mono text-xl`}
        >
          No output yet - try running the workflow!
        </Text>
      </Paper>
    );
  }
  return (
    <div className="w-full max-h-full overflow-hidden">
      <JsonInput value={output} onChange={() => {}} editable={false} />
    </div>
  );
};

export default WorkflowOutputsInterface;
