import { Meta } from '@storybook/react';
import { Text } from './Text';

export default {
  title: 'Components/Text',
  component: Text
} as Meta;

export const Default = () => (
  <Text variant="label">this is some basic text</Text>
);
