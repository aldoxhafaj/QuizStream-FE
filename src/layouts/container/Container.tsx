import { ContainerProps } from './types';

export const Container = ({
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
  onClick,
}: ContainerProps) => {
  return (
    <div
      className={className}
      onClick={onClick}
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
      }}
    >
      {children}
    </div>
  );
};
