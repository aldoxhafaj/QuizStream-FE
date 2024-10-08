import { InputProps as InputComponentProps } from '@nextui-org/input';

export type InputProps = Pick<
  InputComponentProps,
  | 'className'
  | 'type'
  | 'variant'
  | 'color'
  | 'size'
  | 'radius'
  | 'name'
  | 'label'
  | 'value'
  | 'defaultValue'
  | 'placeholder'
  | 'errorMessage'
  | 'description'
  | 'labelPlacement'
  | 'startContent'
  | 'endContent'
  | 'isClearable'
  | 'isRequired'
  | 'isReadOnly'
  | 'isDisabled'
  | 'isInvalid'
  | 'fullWidth'
  | 'onChange'
  | 'onValueChange'
  | 'onClear'
  | 'onBlur'
>;
