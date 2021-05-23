import { Story, Meta } from '@storybook/react';
import { Text, TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text
} as Meta;

const Template: Story<TextProps> = (args) => (
  <Text {...args}>this is some text</Text>
);

export const Default = Template.bind({});
Default.args = {};
