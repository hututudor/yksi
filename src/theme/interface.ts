import { Theme } from 'styled-system';

export type ThemeFunction = {
  (theme: VariantTheme): Object;
};

type VariantTheme = {
  [key in keyof Required<Theme>]: any;
};

export interface YksiTheme extends Theme {
  [key: string]: any;
}
