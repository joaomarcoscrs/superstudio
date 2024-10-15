import React from 'react';
import { Box, Group, Image, Text } from '@mantine/core';
import { Workflow } from '@/types/workflow';

export interface WorkflowTopbarInterfaceProps {
  workflow: Workflow;
}

const WorkflowTopbarInterface: React.FC<WorkflowTopbarInterfaceProps> = ({ workflow }) => {
  return (
    <Box p="xs" className="border-b border-gray-200">
      <Group gap="xs">
        <Image src="https://app.roboflow.com/images/logomark-color-white-fill.svg" width={24} />
        <Text className="text-gray-900 font-medium text-sm">{workflow.name}</Text>
      </Group>
    </Box>
  );
};

export default WorkflowTopbarInterface;
