import { Theme } from 'styled-system';
import { YksiTheme } from './interface';

const BORDERS: Theme['borders'] = [
  0,
  '1px solid',
  '2px solid',
  '3px solid',
  '4px solid'
];

const BREAKPOINTS: Theme['breakpoints'] = {
  xs: '20em',
  sm: '30em',
  md: '48em',
  lg: '80em',
  xlg: '120em'
};

const COLORS: Theme['colors'] = {
  black: '#000000',
  white: '#ffffff',
  transparent: 'transparent'
};

const SHADOWS: Theme['shadows'] = {};

const FONTS: Theme['fonts'] = {
  primary: '"Barlow", sans-serif',
  mono: '"JetBrains Mono", monospace'
};

const FONT_SIZES: Theme['fontSizes'] = [
  '12px',
  '14px',
  '16px',
  '20px',
  '24px',
  '32px'
];

const FONT_WEIGHTS: Theme['fontWeights'] = {
  lighter: 300,
  regular: 400,
  bold: 600,
  black: 900
};

const LETTER_SPACINGS: Theme['letterSpacings'] = {
  normal: 'normal',
  tracked: '0.1rem',
  tight: '-0.05rem',
  mega: '0.25rem'
};

const LINE_HEIGHTS = {
  solid: 1,
  title: 1.25,
  paragraph: 1.5
};

const RADII: Theme['radii'] = {
  none: 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '8': 8,
  '16': 16,
  round: '50%'
};

const Z_INDICES: Theme['zIndices'] = {
  menu: 5,
  modal: 10
};

const GRID = 4;

const SPACE: Theme['space'] = (() =>
  Array.from({ length: 1000 }).map((_, i) => i * GRID))();

export const defaultTheme: YksiTheme = {
  borders: BORDERS,
  breakpoints: BREAKPOINTS,
  colors: COLORS,
  shadows: SHADOWS,
  fonts: FONTS,
  fontSizes: FONT_SIZES,
  fontWeights: FONT_WEIGHTS,
  letterSpacings: LETTER_SPACINGS,
  lineHeights: LINE_HEIGHTS,
  radii: RADII,
  zIndices: Z_INDICES,
  space: SPACE
};
