import { useMemo } from 'react';

const DEFAULT_ROBOFLOW_DOMAIN = 'app.roboflow.com';

interface WorkflowUtils {
  urls: WorkflowUrls;
}

class WorkflowUrls {
  private baseUrl: string;

  constructor(domain: string) {
    this.baseUrl = `https://${domain}`;
  }

  private _workflowUrl(path: string, token: string) {
    return `${this.baseUrl}/workflows/${path}/${token}`;
  }

  shareable(token: string) {
    return this._workflowUrl('embed', token);
  }

  fork(token: string) {
    return this._workflowUrl('fork', token);
  }
}

export function useWorkflow(): WorkflowUtils {
  const domain = useMemo(() => {
    return import.meta.env.VITE_ROBOFLOW_DOMAIN || DEFAULT_ROBOFLOW_DOMAIN;
  }, []);

  const urls = new WorkflowUrls(domain);

  return {
    urls,
  };
}
