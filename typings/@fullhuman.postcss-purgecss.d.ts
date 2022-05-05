declare module '@fullhuman/postcss-purgecss' {
  import {
    UserDefinedOptions,
    purgeCSSPlugin,
  } from '@fullhuman/postcss-purgecss';

  export = (options: UserDefinedOptions) => purgeCSSPlugin;
}
