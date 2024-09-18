import { Input } from '@quiz-stream/components/Input';
import { useField } from 'formik';

import { InputFieldProps } from './types';

//This is only to be used with formik.Otherwise use Input
export const InputField = ({
  name,
  label,
  defaultValue,
  onValueChange,
  ...props
}: InputFieldProps) => {
  const [field, meta, helpers] = useField(name);

  const fieldError = meta.touched && meta.error;

  const fieldErrorMessage = fieldError ? meta.error : undefined;

  const onChangeText = (text: string) => {
    helpers.setTouched(true);
    helpers.setValue(text);
    onValueChange?.(text);
  };

  return (
    <Input
      name={name}
      label={label}
      defaultValue={defaultValue}
      value={field.value}
      errorMessage={fieldErrorMessage}
      isInvalid={!!fieldError}
      onValueChange={onChangeText}
      {...props}
    />
  );
};
