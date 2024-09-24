import { InputProps } from '@quiz-stream/components/Input/types';

export type InputFieldProps = { name: string } & Omit<
  InputProps,
  'isDisabled' | 'isReadOnly' | 'errorMessage' | 'isInvalid' | 'name' | 'value'
>;
