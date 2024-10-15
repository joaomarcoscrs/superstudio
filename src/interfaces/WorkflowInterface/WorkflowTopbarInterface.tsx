import React from 'react';
import { faCodeFork } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { Anchor, Box, Button, Group, Image, useMantineColorScheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useRoboflowUrls } from '@/hooks/useRoboflowUrls';
import { Workflow } from '@/types/workflow';

export interface WorkflowTopbarInterfaceProps {
  workflow: Workflow;
  token: string;
}

const WorkflowTopbarInterface: React.FC<WorkflowTopbarInterfaceProps> = ({ workflow, token }) => {
  const { colorScheme } = useMantineColorScheme();
  const isSmallScreen = useMediaQuery('(max-width: 640px)');
  const { buildForkUrl, buildShareableUrl } = useRoboflowUrls();

  return (
    <Box
      className={clsx(
        'border-b py-1.5 px-3',
        colorScheme === 'dark' ? 'border-gray-700' : 'border-gray-200'
      )}
    >
      <Group justify="space-between" wrap="nowrap">
        <Anchor
          href={buildShareableUrl(token)}
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
          </Group>
        </Anchor>
        <Group gap="xs">
          <Button
            variant="light"
            radius="md"
            size="xs"
            component="a"
            href={buildForkUrl(token)}
            target="_blank"
          >
            <Group gap="xs" wrap="nowrap">
              <FontAwesomeIcon size="sm" icon={faCodeFork} />
              {isSmallScreen ? 'Fork' : 'Fork workflow'}
            </Group>
          </Button>
        </Group>
      </Group>
    </Box>
  );
};

export default WorkflowTopbarInterface;
