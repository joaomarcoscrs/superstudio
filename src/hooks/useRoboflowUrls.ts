import { useMemo } from 'react';

const DEFAULT_ROBOFLOW_DOMAIN = 'app.roboflow.com';

interface RoboflowUrlUtils {
  buildShareableUrl: (token: string) => string;
  buildForkUrl: (token: string) => string;
}

export function useRoboflowUrls(): RoboflowUrlUtils {
  const domain = useMemo(() => {
    return import.meta.env.VITE_ROBOFLOW_DOMAIN || DEFAULT_ROBOFLOW_DOMAIN;
  }, []);

  const buildShareableUrl = (token: string) => `https://${domain}/workflows/embed/${token}`;
  const buildForkUrl = (token: string) => `https://${domain}/workflows/fork/${token}`;

  return {
    buildShareableUrl,
    buildForkUrl,
  };
}
