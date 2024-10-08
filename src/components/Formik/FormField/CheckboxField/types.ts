import { CheckboxProps } from '@quiz-stream/components/Checkbox/types';

export type CheckboxFieldProps = {
  name: string;
} & Omit<
  CheckboxProps,
  | 'isIndeterminate'
  | 'isInvalid'
  | 'isReadOnly'
  | 'isDisabled'
  | 'name'
  | 'onChange'
>;
