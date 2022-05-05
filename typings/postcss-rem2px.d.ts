declare module 'postcss-rem2px' {
  import { Postcss } from 'postcss';

  interface PluginOptions {
    transformType: 'rem' | 'px';
    rate: number;
    rootFontSize: number;
    forbidComment: 'no' | 'yes';
    precision: number;
    remLimit: number;
  }

  type Plugin = (options: PluginOptions) => Postcss;

  export = Plugin;
}
