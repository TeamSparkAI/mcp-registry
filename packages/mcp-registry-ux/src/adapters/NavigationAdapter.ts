/**
 * Props for a Link component
 */
export interface LinkProps {
  href: string;
  children: any;
  className?: string;
  onClick?: () => void;
}

import { ComponentType } from 'react';

/**
 * Interface for navigation/routing.
 * Allows consumers to integrate with their router (Next.js, React Router, etc.)
 */
export interface NavigationAdapter {
  /**
   * Navigate to server detail page
   */
  goToServer(serverName: string, version: string): void;
  
  /**
   * Navigate to server versions list
   */
  goToServerVersions(serverName: string): void;
  
  /**
   * Optional Link component for framework integration
   * If not provided, components will use regular <a> tags
   */
  Link?: ComponentType<LinkProps>;
}

