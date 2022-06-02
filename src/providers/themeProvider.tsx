import React, { createContext, useContext, useMemo, useState } from 'react';
import { Container, darkTheme } from '../../stitches.config.js';

interface IThemeContext {
  isDarkTheme: boolean;
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeProvider = ({ children }: any) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const themeValue = useMemo(
    () => ({
      isDarkTheme,
      setIsDarkTheme,
    }),
    [isDarkTheme],
  );

  return (
    <ThemeContext.Provider value={themeValue}>
      <Container className={isDarkTheme ? darkTheme : ''}>{children}</Container>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);
  return {
    isDarkTheme,
    setIsDarkTheme,
  };
};
