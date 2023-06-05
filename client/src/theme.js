export const colorTokens = {
  // Define ChatGPT theme colors here
  grey: {
    50: "#F3F3F3",
    100: "#E6E6E6",
    200: "#CCCCCC",
    300: "#B3B3B3",
    400: "#999999",
    500: "#808080",
    600: "#666666",
    700: "#4D4D4D",
    800: "#333333",
    900: "#1A1A1A",
    1000: "#000000",
  },
  primary: {
    50: "#A8D0E6",
    100: "#8BBBD5",
    200: "#5F8EAF",
    300: "#3A668D",
    400: "#2B4D6F",
    500: "#1E344F",
    600: "#19293E",
    700: "#131E2D",
    800: "#0E1521",
    900: "#090C16",
  },
};
export const themeSettings = (mode) => {
  const isDarkMode = mode === "dark";

  return {
    palette: {
      mode: isDarkMode ? "dark" : "light", // set mode based on input
      primary: {
        dark: colorTokens.primary[700],
        main: colorTokens.primary[500],
        light: colorTokens.primary[50],
      },
      neutral: {
        dark: colorTokens.grey[700],
        main: colorTokens.grey[500],
        mediumMain: colorTokens.grey[400],
        medium: colorTokens.grey[200],
        light: colorTokens.grey[50],
      },
      background: {
        default: isDarkMode ? colorTokens.grey[900] : colorTokens.grey[100], // set background color based on mode
        alt: isDarkMode ? colorTokens.grey[800] : colorTokens.grey[50], // set background color based on mode
      },
    },
    typography: {
      fontSize: 12,
      h1: {
        fontSize: 40,
      },
      h2: {
        fontSize: 32,
      },
      h3: {
        fontSize: 24,
      },
      h4: {
        fontSize: 20,
      },
      h5: {
        fontSize: 16,
      },
      h6: {
        fontSize: 14,
      },
      fontFamily: "Helvetica Neue, sans-serif",
      fontWeight: "300",
      color: colorTokens.grey[700],
    },
  };
};
