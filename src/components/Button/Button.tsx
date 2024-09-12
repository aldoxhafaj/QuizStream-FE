import { Button as ButtonComponent } from '@nextui-org/button';

import { ButtonProps } from './types';

export const Button = ({
  children,
  className,
  variant,
  color,
  size,
  radius,
  startContent,
  endContent,
  customSpinner,
  spinnerPlacement,
  isIconOnly,
  isLoading,
  isDisabled,
  fullWidth,
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
