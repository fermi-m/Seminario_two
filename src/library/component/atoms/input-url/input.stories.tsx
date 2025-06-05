import type { Meta, StoryObj } from '@storybook/react';
import { InputUrl } from './input';

const meta: Meta<typeof InputUrl> = {
  title: 'Atoms/InputUrl',
  component: InputUrl,
  argTypes: {
    onChange: { action: 'changed' },
    variant: {
      control: { type: 'select' },
      options: ['default', 'focus', 'error', 'disabled'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    borderRadius: {
      control: { type: 'select' },
      options: ['none', 'small', 'full'],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof InputUrl>;

export const Default: Story = {
  args: {
    value: 'enlace',
    variant: 'default',
    size: 'medium',
    borderRadius: 'small',
    disabled: false,
  },
};

export const Focus: Story = {
  args: {
    value: 'enlace',
    variant: 'focus',
    size: 'medium',
    borderRadius: 'small',
    disabled: false,
  },
};

export const Error: Story = {
  args: {
    value: 'enlace',
    variant: 'error',
    size: 'medium',
    borderRadius: 'small',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    value: 'enlace',
    variant: 'disabled',
    size: 'medium',
    borderRadius: 'small',
    disabled: true,
  },
};
