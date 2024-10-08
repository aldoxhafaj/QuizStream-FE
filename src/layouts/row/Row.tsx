import { RowProps } from './types';

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
  onClick,
}: RowProps) => {
  return (
    <div
      className={`flex flex-row ${className}`}
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
        justifyContent,
        alignItems,
        gap,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
