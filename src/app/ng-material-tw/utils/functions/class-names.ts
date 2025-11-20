/**
 * Combines multiple CSS classes
 * @param classes Array of class strings to combine
 * @returns Combined class string
 */
export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}
