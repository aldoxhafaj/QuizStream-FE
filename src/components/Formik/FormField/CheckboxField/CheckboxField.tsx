import { Checkbox } from '@quiz-stream/components/Checkbox';
import { useField } from 'formik';

import { CheckboxFieldProps } from './types';

//This is also designed to be used only with formik.
export const CheckboxField = ({
  name,
  children,
  value,
  icon,
  color,
  radius,
  size,
  defaultSelected,
  isRequired,
  lineThrough,
  onValueChange,
}: CheckboxFieldProps) => {
  const [field, meta, helpers] = useField(name);

  const fieldError = meta.touched && meta.error;

  const onChange = (value: string, isSelected?: boolean) => {
    helpers.setTouched(true);
    helpers.setValue(isSelected);

    onValueChange?.(value, isSelected);
  };

  return (
    <Checkbox
      name={name}
      value={value || field.value}
      icon={icon}
      color={color}
      radius={radius}
      size={size}
      defaultSelected={defaultSelected}
      isRequired={isRequired}
      lineThrough={lineThrough}
      isInvalid={!!fieldError}
      onValueChange={onChange}
    >
      {children}
    </Checkbox>
  );
};
