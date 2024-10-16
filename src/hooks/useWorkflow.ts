import { useMemo } from 'react';

const DEFAULT_ROBOFLOW_DOMAIN = 'app.roboflow.com';

interface WorkflowUtils {
  urls: {
    shareable: (token: string) => string;
    fork: (token: string) => string;
  };
}

function shareableUrl(baseUrl: string, token: string) {
  return `${baseUrl}/workflows/embed/${token}`;
}

function forkUrl(baseUrl: string, token: string) {
  return `${baseUrl}/workflows/fork/${token}`;
}

export function useWorkflow(): WorkflowUtils {
  const domain = useMemo(() => {
    return import.meta.env.VITE_ROBOFLOW_DOMAIN || DEFAULT_ROBOFLOW_DOMAIN;
  }, []);

  const baseUrl = `https://${domain}`;

  return {
    urls: {
      shareable: (token: string) => shareableUrl(baseUrl, token),
      fork: (token: string) => forkUrl(baseUrl, token),
    },
  };
}
