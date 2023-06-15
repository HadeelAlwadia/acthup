import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  }
});

export const theme = {
  darkTheme,
  lightTheme,
  //main or darkTheme
  main:
  localStorage.getItem("theme")? JSON.parse(localStorage.getItem("theme") || "")
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? darkTheme
      : lightTheme,
 
};
