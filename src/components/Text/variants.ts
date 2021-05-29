import { ThemeFunction } from '../../theme';

export const textVariants: ThemeFunction = (theme) => ({
  label: {
    fontSize: theme.fontSizes[3],
    fontWeight: theme.fontWeights.lighter
  }
});
