import { useState } from 'react';
import App from './App.jsx';
import { ThemeContextProvider, THEME_DARK } from './context';

export function AppWrapper() {
  const [theme, setTheme] = useState(THEME_DARK);

  return (
    <ThemeContextProvider value={{ theme, setTheme }}>
      <App />
    </ThemeContextProvider>
  )
}
