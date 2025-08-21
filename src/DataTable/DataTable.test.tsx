import { render, screen, fireEvent } from '@testing-library/react';
import DataTable from './DataTable';
import type { Column } from './types';

type User = { name: string; email: string };

const users: User[] = [
  { name: 'John Doe', email: 'john@example.com' },
  { name: 'Jane Smith', email: 'jane@example.com' },
];

const columns: Column<User>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email' },
];

describe('DataTable', () => {
  test('renders rows and allows sorting', () => {
    render(<DataTable data={users} columns={columns} />);

    // default first row
    expect(screen.getByText('John Doe')).toBeInTheDocument();

    // click Name header to sort descending
    fireEvent.click(screen.getByText('Name'));
    fireEvent.click(screen.getByText('Name'));

    // after descending sort, Jane should be first
    const firstRowCell = screen.getAllByRole('row')[1].children[0];
    expect(firstRowCell.textContent).toBe('Jane Smith');
  });

  test('row selection (single)', () => {
    const callback = jest.fn();
    render(
      <DataTable
        data={users}
        columns={columns}
        selectable="single"
        onRowSelect={callback}
      />
    );

    const firstRow = screen.getByText('John Doe').closest('tr')!;
    fireEvent.click(firstRow);

    expect(callback).toHaveBeenCalledWith([users[0]]);
  });
});
