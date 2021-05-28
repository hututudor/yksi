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

export const Text: FC<TextProps> = styled.div<TextProps>(
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
