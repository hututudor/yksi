import merge from 'lodash.merge';
import { Theme } from 'styled-system';
import { YksiTheme } from './interface';
import { variants } from './variants';

export const createTheme = (
  theme: YksiTheme,
  customization?: YksiTheme
): YksiTheme => {
  const newTheme = merge(theme, customization);

  variants.forEach((variant) => {
    newTheme[variant.key] = variant.fn(newTheme as Required<Theme>);
  });

  console.log('theme', newTheme);

  return newTheme;
};
