import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { createTheme, defaultTheme, init } from '../src';

init();

addDecorator((storyFn) => (
  <ThemeProvider theme={createTheme(defaultTheme)}>{storyFn()}</ThemeProvider>
));
