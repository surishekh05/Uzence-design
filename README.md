# React UI Components – InputField & DataTable

This repository contains two reusable UI components built with **React, TypeScript, TailwindCSS, and Storybook**:

1. **InputField** – A flexible input component with validation, variants, sizes, clear button, and password toggle.
2. **DataTable** – A table component with sorting, row selection (single/multiple), loading state, and responsive design.

---

## 📂 Folder Structure

src/
├─ components/
│ ├─ InputField/
│ │ ├─ InputField.tsx
│ │ ├─ InputField.stories.tsx
│ │ ├─ InputField.test.tsx
│ │ └─ types.ts
│ ├─ DataTable/
│ │ ├─ DataTable.tsx
│ │ ├─ DataTable.stories.tsx
│ │ ├─ DataTable.test.tsx
│ │ └─ types.ts


---

## 🛠️ Tech Stack

- **React** (with Hooks & functional components)
- **TypeScript** (with proper typing for props & generics)
- **TailwindCSS** (for styling)
- **Storybook** (for interactive component documentation)

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/surishekh05/Uzence-design.git
cd Uzence-design


---

## Install dependencies

npm install

---

## Run Storybook

npm run storybook

Storybook will start on http://localhost:6006/.

## Run tests

npm run test

---

Components
🔹 InputField

A flexible input component with:

Variants: filled, outlined, ghost

Sizes: sm, md, lg

States: disabled, invalid, loading

Features: label, helper text, error message, clear button, password toggle

Dark mode support (using Tailwind dark: classes)

Example:

<InputField
  label="Username"
  placeholder="Enter your username"
  helperText="This will be public"
  variant="outlined"
  size="md"
/>

---

🔹 DataTable

A table component with:

Display tabular data

Column sorting (3-state: asc → desc → none)

Row selection (single/multiple) with highlight

Loading state

Responsive design

Example:

<DataTable
  data={users}
  columns={[
    { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
    { key: 'email', title: 'Email', dataIndex: 'email' },
  ]}
  selectable="multiple"
  onRowSelect={(rows) => console.log(rows)}
/>

