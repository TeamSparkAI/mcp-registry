export interface BuildConfig {
  debugMode: boolean;
  maxServers?: number;
  serverIds?: string[];
  steps: {
    scrape: boolean;
    download: boolean;
    process: boolean;
    prioritize: boolean;
    icons: boolean;
  };
  options: {
    forceRedownload: boolean;
    skipExistingIcons: boolean;
  };
} 