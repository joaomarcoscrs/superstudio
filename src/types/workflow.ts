export interface Workflow {
  id: string;
  owner: string;
  createTime?: object;
  updateTime?: object;
  url: string;
  name: string;
  config: string;
}

export interface WorkflowExample {
  id: string;
  cachedPreview?: SuccessfulWorkflowPreviewOutput;
  [key: string]: WorkflowPreviewInput;
}

// Workflow Preview types

interface WorkflowPreviewImageUrlInput {
  path: string;
  type: 'url';
  validUrl?: boolean;
  value: string;
}

// TODO: Add base64 interface here
export type WorkflowPreviewImageInput = WorkflowPreviewImageUrlInput;

// TODO: Add other preview parameter types here
export type WorkflowPreviewInput = WorkflowPreviewImageInput | any;

export interface SuccessfulWorkflowPreviewOutput {
  outputs: any[];
}

// TODO: Add failure case here
export type WorlflowPreviewOutput = SuccessfulWorkflowPreviewOutput | any;
