import { Button } from '@quiz-stream/components/Button';
import { Container } from '@quiz-stream/layouts/container';
import { IconSVG } from '@quiz-stream/layouts/iconSVG';

import { CarouselControlProps } from './types';

export const CarouselControl = ({
  customControl,
  direction,
  onPress,
}: CarouselControlProps) => {
  const isLeftControl = direction === 'left';

  if (!!customControl) {
    return (
      <Container
        className={`absolute ${isLeftControl ? 'left-0' : 'right-0'} top-1/2 z-10 -translate-y-1/2`}
        onClick={onPress}
      >
        {customControl}
      </Container>
    );
  }

  return (
    <Button
      className={`absolute ${isLeftControl ? 'left-0' : 'right-0'} top-1/2 z-10 -translate-y-1/2 bg-transparent p-2 hover:bg-gray-800`}
      radius="full"
      onPress={onPress}
      isIconOnly
    >
      <IconSVG name={isLeftControl ? 'chevronLeft' : 'chevronRight'} />
    </Button>
  );
};
