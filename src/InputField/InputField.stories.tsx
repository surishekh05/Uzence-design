import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { useState } from 'react';
import InputField from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return <InputField {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  },
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

export const FilledVariant: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return <InputField {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  },
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    variant: 'filled',
  },
};

export const OutlinedVariant: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return <InputField {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  },
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    variant: 'outlined',
  },
};

export const GhostVariant: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return <InputField {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  },
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    variant: 'ghost',
  },
};

export const InvalidState: Story = {
  render: (args) => {
    const [value, setValue] = useState('wrong');
    return <InputField {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  },
  args: {
    invalid: true,
    errorMessage: 'Email is invalid',
  },
};

export const PasswordField: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return <InputField {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  },
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
  },
};

export const WithHelperText: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return <InputField {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  },
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    helperText: 'This will be publicly visible',
  },
};
