export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl';

declare function include(template: string, data: Record<string, any>): string;

declare function template(template: string): string;

declare function data<T = any>(file: string): T;

declare function image(
  collection: string,
  image: string,
  size: Breakpoint,
): string;
