import type { Meta, StoryObj } from '@storybook/react';
import { LabelInput } from './label';

const meta: Meta<typeof LabelInput> = {
  title: 'Atoms/LabelInput',
  component: LabelInput,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'disabled'],
    },
    text: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof LabelInput>;

export const Default: Story = {
  args: {
    text: 'Website Address',
    variant: 'default',
  },
};

export const Disabled: Story = {
  args: {
    text: 'Website Address',
    variant: 'disabled',
  },
};
