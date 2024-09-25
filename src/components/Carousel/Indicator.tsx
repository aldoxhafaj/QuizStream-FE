import { IndicatorProps } from './types';

export const Indicator = ({ isActive }: IndicatorProps) => {
  const indicatorStyle = isActive
    ? 'scale-x-110 bg-contrast'
    : 'bg-gray-400 opacity-65';

  return (
    <div
      className={`h-1 min-w-10 cursor-pointer select-none ${indicatorStyle} rounded-sm transition-all duration-300`}
    />
  );
};
