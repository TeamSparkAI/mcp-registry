import { Icon } from '@/types/mcp-registry';

/**
 * Select the best icon from an array based on theme preference
 * @param icons Array of icons from server.icons
 * @param preferredTheme Theme to prefer ('light' or 'dark')
 * @returns Icon src URL or null if no icons available
 */
export function getBestIcon(icons: Icon[] | undefined, preferredTheme: 'light' | 'dark' = 'light'): string | null {
  if (!icons || icons.length === 0) {
    return null;
  }

  // First, try to find an icon matching the preferred theme
  const themedIcon = icons.find(icon => icon.theme === preferredTheme);
  if (themedIcon) {
    return themedIcon.src;
  }

  // Fallback to the first icon
  return icons[0].src;
}

