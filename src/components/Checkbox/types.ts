import { CheckboxProps as CheckboxComponentProps } from '@nextui-org/checkbox';

export type CheckboxProps = Pick<
  CheckboxComponentProps,
  | 'children'
  | 'icon'
  | 'value'
  | 'name'
  | 'size'
  | 'color'
  | 'radius'
  | 'lineThrough'
  | 'defaultSelected'
  | 'isRequired'
  | 'isReadOnly'
  | 'isDisabled'
  | 'isIndeterminate'
  | 'isInvalid'
  | 'onChange'
>;
