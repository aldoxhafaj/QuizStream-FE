import { Checkbox as CheckboxComponent } from '@nextui-org/checkbox';
import { useState } from 'react';

import { CheckboxProps } from './types';

export const Checkbox = ({
  children,
  icon,
  color = 'primary',
  size = 'md',
  radius,
  value,
  name,
  lineThrough = false,
  defaultSelected = false,
  isReadOnly = false,
  isIndeterminate = false, //if true presentational only.remains the same despite user interaction
  isInvalid = false,
  isDisabled = false,
  isRequired = false,
  onValueChange,
}: CheckboxProps) => {
  const [isSelected, setIsSelected] = useState(defaultSelected);

  return (
    <CheckboxComponent
      name={name}
      icon={icon}
      color={color}
      defaultSelected={defaultSelected}
      size={size}
      radius={radius}
      value={value}
      lineThrough={lineThrough}
      isReadOnly={isReadOnly}
      isIndeterminate={isIndeterminate}
      isInvalid={isInvalid}
      isDisabled={isDisabled}
      isRequired={isRequired}
      isSelected={isSelected}
      onChange={(e) => onValueChange?.(e.target.value, e.target.checked)}
      onValueChange={(isSelected) => setIsSelected(isSelected)}
    >
      {children}
    </CheckboxComponent>
  );
};
