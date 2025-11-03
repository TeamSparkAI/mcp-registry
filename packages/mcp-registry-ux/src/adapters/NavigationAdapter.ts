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
   * Get URL for server detail page
   * @returns The URL path to navigate to
   */
  goToServer(serverName: string, version: string): string;
  
  /**
   * Get URL for server versions list
   * @returns The URL path to navigate to
   */
  goToServerVersions(serverName: string): string;
  
  /**
   * Optional Link component for framework integration
   * If not provided, components will use regular <a> tags
   */
  Link?: ComponentType<LinkProps>;
}

