/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} theme Theme customization object
 */

export default function themePalette(theme) {
  
  const isDarkMode = theme?.customization?.mode === 'dark';
  
  return {
    mode: theme?.customization?.mode,
    common: {
      black: isDarkMode ? theme.colors?.paper : theme.colors?.darkPaper
    },
    primary: {
      light: isDarkMode ? theme.colors?.darkLevel2 : theme.colors?.primaryLight,
      main: isDarkMode ? theme.colors?.primaryMain :  theme.colors?.primaryMain,
      dark: isDarkMode ? theme.colors?.primaryDark :  theme.colors?.primaryDark,
      200: isDarkMode ? theme.colors?.primary200 :  theme.colors?.primary200,
      800: isDarkMode ? theme.colors?.primary800 :  theme.colors?.primary800
    },
    secondary: {
      light: theme.colors?.secondaryLight,
      main: theme.colors?.secondaryMain,
      dark: theme.colors?.secondaryDark,
      200: theme.colors?.secondary200,
      800: theme.colors?.secondary800
    },
    error: {
      light: theme.colors?.errorLight,
      main: theme.colors?.errorMain,
      dark: theme.colors?.errorDark
    },
    orange: {
      light: theme.colors?.orangeLight,
      main: theme.colors?.orangeMain,
      dark: theme.colors?.orangeDark
    },
    warning: {
      light: theme.colors?.warningLight,
      main: theme.colors?.warningMain,
      dark: theme.colors?.warningDark
    },
    success: {
      light: theme.colors?.successLight,
      200: theme.colors?.success200,
      main: theme.colors?.successMain,
      dark: theme.colors?.successDark
    },
    grey: {
      50: theme.colors?.grey50,
      100: theme.colors?.grey100,
      500: theme.darkTextSecondary,
      600: theme.heading,
      700: theme.darkTextPrimary,
      900: isDarkMode ? theme.colors?.grey50 : theme.textDark
    },
    dark: {
      light: theme.colors?.darkTextPrimary,
      main: theme.colors?.darkLevel1,
      dark: theme.colors?.darkLevel2,
      800: theme.colors?.darkBackground,
      900: isDarkMode ? theme.colors?.grey50 : theme.colors?.darkPaper
    },
    text: {
      primary: isDarkMode ? theme.colors?.grey100 : theme.darkTextPrimary,
      secondary: isDarkMode ? theme.colors?.grey300 : theme.darkTextSecondary,
      dark: isDarkMode ? theme.colors?.grey50 : theme.textDark,
      hint: isDarkMode ? theme.colors?.grey900 : theme.colors?.grey100
    },
    background: {
      paper: isDarkMode ? theme.colors?.darkPaper : theme.paper,
      default: isDarkMode ? theme.colors?.darkBackground : theme.backgroundDefault
    }
  };
}
