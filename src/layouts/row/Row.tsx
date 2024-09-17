import { RowProps } from './types';

const DISPLAY_TYPE = 'flex';
const FLEX_DIRECTION = 'row';
export const Row = ({
  children,
  className,
  flex,
  flexGrow,
  padding,
  paddingTop,
  paddingBottom,
  paddingRight,
  paddingLeft,
  paddingHorizontal,
  paddingVertical,
  margin,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  marginHorizontal,
  marginVertical,
  justifyContent = 'center',
  alignItems = 'center',
  gap,
}: RowProps) => {
  return (
    <div
      className={className}
      style={{
        flex,
        flexGrow,
        paddingTop: paddingTop || paddingVertical || padding,
        paddingBottom: paddingBottom || paddingVertical || padding,
        paddingRight: paddingRight || paddingHorizontal || padding,
        paddingLeft: paddingLeft || paddingHorizontal || padding,
        marginTop: marginTop || marginVertical || margin,
        marginBottom: marginBottom || marginVertical || margin,
        marginRight: marginRight || marginHorizontal || margin,
        marginLeft: marginLeft || marginHorizontal || margin,
        display: DISPLAY_TYPE,
        flexDirection: FLEX_DIRECTION,
        justifyContent,
        alignItems,
        gap,
      }}
    >
      {children}
    </div>
  );
};
