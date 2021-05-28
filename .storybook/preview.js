import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { createTheme, defaultTheme } from '../src';

addDecorator((storyFn) => (
  <ThemeProvider theme={createTheme(defaultTheme)}>{storyFn()}</ThemeProvider>
));
