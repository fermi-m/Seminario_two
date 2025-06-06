import type { Meta, StoryObj } from '@storybook/react';
import { InfoTip } from './infotip';

const meta: Meta<typeof InfoTip> = {
  title: 'Atoms/InfoTipUrl',
  component: InfoTip,
  argTypes: {
    message: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: ['default', 'error', 'disabled'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof InfoTip>;

export const Default: Story = {
  args: {
    message: 'Información general',
    variant: 'default',
    size: 'medium',
  },
};

export const Error: Story = {
  args: {
    message: 'Error: revise los datos',
    variant: 'error',
    size: 'medium',
  },
};

export const Disabled: Story = {
  args: {
    message: 'No disponible',
    variant: 'disabled',
    size: 'medium',
  },
};
