import { Input as InputComponent } from '@nextui-org/input';

import { InputProps } from './types';

export const Input = ({
  className,
  name,
  variant = 'flat',
  size = 'md',
  color = 'default',
  radius,
  type,
  defaultValue,
  value,
  placeholder,
  description,
  label,
  labelPlacement = 'inside',
  startContent,
  endContent,
  errorMessage /* works with isInvalid set to true */,
  onChange,
  onBlur,
  onClear,
  onValueChange,
  isClearable = false,
  isRequired = false,
  isReadOnly = false,
  isDisabled = false,
  isInvalid = false,
  fullWidth = false,
}: InputProps) => {
  return (
    <InputComponent
      className={className}
      size={size}
      type={type}
      label={label}
      labelPlacement={labelPlacement}
      value={value}
      name={name}
      defaultValue={defaultValue}
      placeholder={placeholder}
      description={description}
      radius={radius}
      variant={variant}
      color={color}
      startContent={startContent}
      endContent={endContent}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
      isClearable={isClearable}
      onChange={onChange}
      onBlur={onBlur}
      onClear={onClear}
      onValueChange={onValueChange}
      fullWidth={fullWidth}
      autoComplete="on"
    />
  );
};
