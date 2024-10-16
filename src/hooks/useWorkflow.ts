import { useMemo } from 'react';
import api, { Api } from '@/utils/api';

const DEFAULT_ROBOFLOW_DOMAIN = 'app.roboflow.com';

interface WorkflowUtils {
  urls: WorkflowUrls;
  service: WorkflowService;
}

class WorkflowUrls {
  private baseAppUrl: string;

  constructor(appDomain: string) {
    this.baseAppUrl = `https://${appDomain}`;
  }

  shareable(token: string) {
    return `${this.baseAppUrl}/workflows/embed/${token}`;
  }

  fork(token: string) {
    return `${this.baseAppUrl}/workflows/fork/${token}`;
  }
}

// TODO: move this to a separate file when it gets more complex
class WorkflowService {
  constructor(private api: Api) {
    this.api = api;
  }

  async fetchWorkflow(token: string) {
    return this.api.workflows.fetch(token);
  }
}

export function useWorkflow(): WorkflowUtils {
  const appDomain = useMemo(() => {
    return import.meta.env.VITE_ROBOFLOW_DOMAIN || DEFAULT_ROBOFLOW_DOMAIN;
  }, []);

  const urls = new WorkflowUrls(appDomain);

  return {
    urls,
    service: new WorkflowService(api),
  };
}
