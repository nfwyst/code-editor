import { PropsWithChildren } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useAppSelector } from 'store/hooks';

import { commonColors, lightColors, darkColors } from './colors';

const CustomThemeProvider = (props: PropsWithChildren<{}>) => {
  const darkMode = useAppSelector(state => state.darkMode);
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: commonColors.primary,
      },
    },
    background: darkMode ? darkColors.background : lightColors.background,
    font: darkMode ? darkColors.font : lightColors.font,
    commonColors,
  });

  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
}

export default CustomThemeProvider
