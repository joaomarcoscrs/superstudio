import React from 'react';
import { faCodeFork, faExpand } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { Anchor, Box, Group, Image, useMantineColorScheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Button from '@/components/Button/Button';
import { useWorkflow } from '@/hooks/useWorkflow';
import { Workflow } from '@/types/workflow';

export interface WorkflowTopbarInterfaceProps {
  workflow: Workflow;
  token: string;
}

const WorkflowTopbarInterface: React.FC<WorkflowTopbarInterfaceProps> = ({ workflow, token }) => {
  const { colorScheme } = useMantineColorScheme();
  const isSmallScreen = useMediaQuery('(max-width: 640px)');
  const { urls } = useWorkflow();

  return (
    <Box
      className={clsx(
        'border-b py-1.5 px-3',
        colorScheme === 'dark' ? 'border-gray-700' : 'border-gray-200'
      )}
    >
      <Group justify="space-between" wrap="nowrap">
        <Anchor
          href={urls.shareable(token)}
          target="_blank"
          truncate
          className={clsx(
            'font-medium text-sm transition-all duration-200 !no-underline hover:font-semibold',
            colorScheme === 'dark'
              ? 'text-gray-100 hover:text-aquavision-500'
              : 'text-gray-900 hover:text-purboflow-500'
          )}
        >
          <Group gap="xs" wrap="nowrap">
            <Image src="https://app.roboflow.com/images/logomark-color-white-fill.svg" width={24} />
            {workflow.name}
            <FontAwesomeIcon icon={faExpand} />
          </Group>
        </Anchor>
        <Group gap="xs">
          <Button
            variant="light"
            radius="md"
            size="xs"
            component="a"
            href={urls.fork(token)}
            target="_blank"
            label={isSmallScreen ? 'Fork' : 'Fork workflow'}
            icon={faCodeFork}
          />
        </Group>
      </Group>
    </Box>
  );
};

export default WorkflowTopbarInterface;
