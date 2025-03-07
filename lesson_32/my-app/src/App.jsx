import { Loader } from "./components";
import { RouterProvider } from 'react-router-dom';
import { router } from './router/index';
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useMemo } from "react";
import { getDesignTokens } from "./services/material-theme.js";
import { useSelector } from 'react-redux';
import { selectTheme } from "./store/app";

function App() {
  const mode = useSelector(selectTheme);
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <RouterProvider
          router={router}
          fallbackElement={<Loader />}
          future={{ v7_startTransition: true }}
        />
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App




