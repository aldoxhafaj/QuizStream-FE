import { VerticalSpacing } from '@quiz-stream/themes/spacing';

import { FooterProps } from './types';

const JUSTIFY_DIRECTION = 'flex-end';
const ALIGN_SELF = 'stretch';
export const Footer = ({
  children,
  flexGrow = 1,
  alignItems = 'center',
  paddingBottom,
  marginBottom,
  enableBottomPadding = false,
}: FooterProps) => {
  return (
    <div
      style={{
        flexGrow,
        alignSelf: ALIGN_SELF,
        justifyContent: JUSTIFY_DIRECTION,
        alignItems,
        paddingBottom: enableBottomPadding ? VerticalSpacing.M : paddingBottom,
        marginBottom,
      }}
    >
      {children}
    </div>
  );
};
