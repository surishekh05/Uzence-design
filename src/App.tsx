import { useState } from 'react';
import InputField from './InputField/InputField';
import DataTable from './DataTable/DataTable';
import './App.css';
import type { Column } from './DataTable/types';

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

function App() {
  const [inputValue, setInputValue] = useState('');
  const [password, setPassword] = useState("");
  const [selected, setSelected] = useState<User[]>([]);

   return (
    <div className="p-8 space-y-8">
      {/* InputField Demo */}
      <InputField
        label="Username"
        placeholder="Enter username"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        variant="outlined"
      />

      <InputField
          label="Password"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

      {/* DataTable Demo */}
      <DataTable
        data={users}
        columns={columns}
        selectable="multiple"
        onRowSelect={(rows) => setSelected(rows)}
      />
    </div>
  );
}

export default App;
