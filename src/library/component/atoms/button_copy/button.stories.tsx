import type { Meta, StoryObj } from '@storybook/react';
import { ButtonCopy } from './button';

const meta: Meta<typeof ButtonCopy> = {
  title: 'Atoms/ButtonCopy',
  component: ButtonCopy,
  argTypes: {
    onClick: { action: 'clicked' },
    disabled: { control: 'boolean' },
    showIcon: { control: 'boolean' },
    label: { control: 'text' },
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
  },
};

export default meta;
type Story = StoryObj<typeof ButtonCopy>;

export const Default: Story = {
  args: {
    label: 'Copy',
    variant: 'default',
    size: 'medium',
    borderRadius: 'small',
    disabled: false,
    showIcon: true,
  },
};

export const Focus: Story = {
  args: {
    label: 'Copy',
    variant: 'focus',
    size: 'medium',
    borderRadius: 'small',
    disabled: false,
    showIcon: true,
  },
};

export const Error: Story = {
  args: {
    label: 'Copy',
    variant: 'error',
    size: 'medium',
    borderRadius: 'small',
    disabled: false,
    showIcon: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Copy',
    variant: 'disabled',
    size: 'medium',
    borderRadius: 'small',
    disabled: true,
    showIcon: true,
  },
};
