import WorkflowApi from './workflows';

const DEFAULT_API_DOMAIN = 'api.roboflow.com';

const apiDomain = import.meta.env.VITE_API_DOMAIN || DEFAULT_API_DOMAIN;
const baseApiUrl = `https://${apiDomain}`;

export interface Api {
  workflows: WorkflowApi;
}

const api: Api = {
  workflows: new WorkflowApi(baseApiUrl),
};

export default api;
