import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InputField from './InputField';

describe('InputField', () => {
  test('renders label and calls onChange', () => {
    const handleChange = jest.fn();
    render(
      <InputField
        label="Username"
        placeholder="Enter username"
        onChange={handleChange}
      />
    );

    // label is rendered
    expect(screen.getByText('Username')).toBeInTheDocument();

    // input change
    const input = screen.getByPlaceholderText('Enter username');
    fireEvent.change(input, { target: { value: 'John' } });
    expect(handleChange).toHaveBeenCalled();
  });

  test('shows error message when invalid', () => {
    render(
      <InputField
        label="Email"
        value="wrong"
        invalid
        errorMessage="Email is invalid"
      />
    );

    expect(screen.getByText('Email is invalid')).toBeInTheDocument();
  });
});
