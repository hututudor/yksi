import { FC } from 'react';
import styled from 'styled-components';
import {
  color,
  colorStyle,
  compose,
  layout,
  space,
  textStyle,
  typography,
  variant,
  ColorProps,
  ColorStyleProps,
  LayoutProps,
  SpaceProps,
  TextStyleProps,
  TypographyProps
} from 'styled-system';
import { themeGet } from '../../utils';

export interface TextProps
  extends ColorProps,
    ColorStyleProps,
    LayoutProps,
    SpaceProps,
    TextStyleProps,
    TypographyProps {
  variant?: string;
  as?: string;
}

const StyledText = styled.div`
  font-family: ${themeGet('fonts.primary')};
`;

export const Text: FC<TextProps> = styled(StyledText)<TextProps>(
  compose(
    color,
    colorStyle,
    layout,
    space,
    textStyle,
    typography,
    variant({ scale: 'Text' })
  )
);
