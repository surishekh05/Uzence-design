import React, { useState } from 'react';
import type { InputFieldProps } from './types';

const InputField: React.FC<InputFieldProps> = ({
  value = '',
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = 'outlined',
  size = 'md',
  type = 'text',
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleClear = () => {
    onChange?.({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
  };

  const handleTogglePassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  // Variant classes
  const variantClass =
    variant === 'filled'
      ? 'bg-gray-100 dark:bg-gray-700'
      : variant === 'ghost'
      ? 'bg-transparent'
      : 'bg-white dark:bg-gray-800 border';

  // Size classes
  const sizeClass =
    size === 'sm'
      ? 'px-2 py-1 text-sm'
      : size === 'lg'
      ? 'px-4 py-3 text-lg'
      : 'px-3 py-2 text-base';

  const inputType =
    type === 'password' && !isPasswordVisible ? 'password' : 'text';

  return (
    <div className="flex flex-col gap-1">
      {label && <label className="font-medium">{label}</label>}

      <div
        className={`
          relative flex items-center rounded
          ${variantClass}
          ${
            invalid
              ? 'border border-red-500'
              : 'border border-gray-300 dark:border-gray-600'
          }
          ${sizeClass}
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        <input
          aria-invalid={invalid}
          disabled={disabled}
          value={value}
          type={inputType}
          placeholder={placeholder}
          onChange={onChange}
          className="bg-transparent w-full focus:outline-none"
        />

        {value && !disabled && (
          <button
            aria-label="Clear"
            onClick={handleClear}
            className="absolute right-8 text-sm"
            type="button"
          >
            ×
          </button>
        )}

        {type === 'password' && !disabled && (
          <button
            aria-label="Toggle password visibility"
            onClick={handleTogglePassword}
            className="absolute right-2 text-sm"
            type="button"
          >
            {isPasswordVisible ? '🙈' : '👁️'}
          </button>
        )}
      </div>

      {invalid && errorMessage ? (
        <span className="text-red-500 text-sm">{errorMessage}</span>
      ) : (
        helperText && <span className="text-gray-500 text-sm">{helperText}</span>
      )}
    </div>
  );
};

export default InputField;
