import type { StoryObj, Meta } from '@storybook/react';
import URLInput from './URLinput';

const meta: Meta<typeof URLInput> = {
    title: 'ui/components/atoms/URLInput',
    component: URLInput,
    argTypes: {
        /*         variant: {
                    control: { type: 'select' },
                    options: ['default', 'focus', 'error', 'disabled'],
                }, */
        /*         size: {
                    control: { type: 'select' },
                    options: ['small', 'medium', 'large'],
                }, */
        /*         borderRadius: {
                    control: { type: 'select' },
                    options: ['none', 'small', 'full'],
                }, */
        onChange: { action: 'changed' },
        onCloseClick: { action: 'closeClicked' },
        onCopyClick: { action: 'copyClicked' },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 'ruvojahan.com',
        label: 'Website Address',
        variant: 'default',
    },
};

export const focus: Story = {
    args: {
        value: 'ruvojahan.com',
        variant: 'focus',
    },
};

export const error: Story = {
    args: {
        value: 'ruvojahan.com',
        variant: 'error',
    },
};

export const Disabled: Story = {
    args: {
        value: 'ruvojahan.com',
        variant: 'disabled',
    },
};
