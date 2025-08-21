import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { useState } from 'react';
import DataTable from './DataTable';
import type { Column } from './types'

type User = {
  name: string;
  email: string;
};

const users: User[] = [
  { name: 'John Doe', email: 'john@example.com' },
  { name: 'Jane Smith', email: 'jane@example.com' },
];

const columns: Column<User>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email' },
];

const meta: Meta<typeof DataTable<User>> = {
  title: 'Components/DataTable',
  component: DataTable<User>,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DataTable<User>>;

export const Default: Story = {
  render: (args) => <DataTable {...args} />,
  args: {
    data: users,
    columns,
  },
};

export const Sortable: Story = {
  render: (args) => <DataTable {...args} />,
  args: {
    data: users,
    columns,
  },
};

export const SelectableSingle: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<User[]>([]);
    return (
      <DataTable
        {...args}
        onRowSelect={(rows) => setSelected(rows)}
        selectable="single"
      />
    );
  },
  args: {
    data: users,
    columns,
  },
};

export const SelectableMultiple: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<User[]>([]);
    return (
      <DataTable
        {...args}
        onRowSelect={(rows) => setSelected(rows)}
        selectable="multiple"
      />
    );
  },
  args: {
    data: users,
    columns,
  },
};

export const Loading: Story = {
  render: (args) => <DataTable {...args} />,
  args: {
    loading: true,
    data: [],
    columns,
  },
};
