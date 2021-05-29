import { get } from '@styled-system/core';

export const themeGet = (key: string, fallback?: string | number) => (
  props: any
) => get(props.theme, key) ?? fallback;
