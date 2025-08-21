import React, { useState } from 'react';
import type { DataTableProps } from './types';

type SortOrder = 'asc' | 'desc' | null;

function DataTable<T>({
  data,
  columns,
  loading = false,
  selectable,
  onRowSelect,
}: DataTableProps<T>) {
  const [sortedColumn, setSortedColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>(null);
  const [selectedRows, setSelectedRows] = useState<T[]>([]);

  const handleSort = (columnKey: string) => {
    if (sortedColumn !== columnKey) {
      setSortedColumn(columnKey);
      setSortOrder('asc');
    } else {
      // cycle between asc -> desc -> null
      if (sortOrder === 'asc') {
        setSortOrder('desc');
      } else if (sortOrder === 'desc') {
        setSortOrder(null);
      } else {
        setSortOrder('asc');
      }
    }
  };

  const sortedData = React.useMemo(() => {
    if (!sortedColumn || sortOrder === null) {
      return data;
    }

    const sorted = [...data].sort((a, b) => {
      const av = (a as any)[sortedColumn];
      const bv = (b as any)[sortedColumn];

      if (av < bv) return sortOrder === 'asc' ? -1 : 1;
      if (av > bv) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [data, sortedColumn, sortOrder]);

  const isSelected = (row: T) =>
    selectedRows.includes(row);

  const handleRowClick = (row: T) => {
    if (!selectable) return;

    let newSelected: T[] = [];
    if (selectable === 'single') {
      newSelected = [row];
    } else {
      // multiple
      if (isSelected(row)) {
        newSelected = selectedRows.filter((r) => r !== row);
      } else {
        newSelected = [...selectedRows, row];
      }
    }
    setSelectedRows(newSelected);
    onRowSelect?.(newSelected);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full" role="table">
        <thead>
          <tr role="row">
            {columns.map((col) => (
              <th
                key={col.key}
                role="columnheader"
                onClick={() => col.sortable && handleSort(col.key)}
                className={`px-4 py-2 text-left border-b ${
                  col.sortable ? 'cursor-pointer select-none' : ''
                }`}
              >
                {col.title}
                {sortedColumn === col.key && sortOrder && (
                  <span className="ml-1">
                    {sortOrder === 'asc' ? '▲' : '▼'}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {!loading &&
            sortedData.map((row, index) => (
              <tr
                role="row"
                key={index}
                onClick={() => handleRowClick(row)}
                className={`border-b ${
                  selectable && isSelected(row)
                    ? 'bg-gray-200 dark:bg-gray-700'
                    : ''
                } hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer`}
              >
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-2">
                    {String(row[col.dataIndex])}
                  </td>
                ))}
              </tr>
            ))}

          {loading && (
            <tr>
              <td className="px-4 py-2" colSpan={columns.length}>
                Loading...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
