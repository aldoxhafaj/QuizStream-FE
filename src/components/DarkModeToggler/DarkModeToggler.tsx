import { useThemeToggler } from '@quiz-stream/contexts/ThemeContext';
import { IconSVG } from '@quiz-stream/layouts/iconSVG';
import { Row } from '@quiz-stream/layouts/row';

export const DarkModeToggler = () => {
  const { toggleTheme, isDarkColorTheme } = useThemeToggler();

  return (
    <Row
      className="size-8 cursor-pointer select-none rounded-x1 bg-sharp-container hover:opacity-85 active:opacity-60"
      onClick={toggleTheme}
    >
      <IconSVG name={isDarkColorTheme ? 'sun' : 'moon'} />
    </Row>
  );
};
