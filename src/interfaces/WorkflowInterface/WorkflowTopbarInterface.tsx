import React from 'react';
import { Workflow } from '@/types/workflow';

export interface WorkflowTopbarInterfaceProps {
  workflow: Workflow;
}

const WorkflowTopbarInterface: React.FC<WorkflowTopbarInterfaceProps> = ({ workflow }) => {
  return <div>WorkflowTopbarInterface</div>;
};

export default WorkflowTopbarInterface;
