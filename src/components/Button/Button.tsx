import { Button as ButtonComponent } from '@nextui-org/button';

import { ButtonProps } from './types';

export const Button = ({
  children,
  className,
  variant = 'solid',
  color = 'default',
  size = 'md',
  radius,
  startContent,
  endContent,
  customSpinner,
  spinnerPlacement = 'start',
  isIconOnly = false,
  isLoading = false,
  isDisabled = false,
  fullWidth = true,
  onPress,
}: ButtonProps) => {
  return (
    <ButtonComponent
      className={className}
      variant={variant}
      size={size}
      color={color}
      radius={radius}
      startContent={startContent}
      endContent={endContent}
      spinner={customSpinner}
      spinnerPlacement={spinnerPlacement}
      isIconOnly={isIconOnly}
      isLoading={isLoading}
      isDisabled={isDisabled}
      fullWidth={fullWidth}
      onPress={onPress}
    >
      {children}
    </ButtonComponent>
  );
};
