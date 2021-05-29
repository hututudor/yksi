import { get } from '@styled-system/core';

export const themed = (key: string) => (props: any) => get(props.theme, key);
