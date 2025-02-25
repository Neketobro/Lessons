// import { useState } from 'react';
import App from './App.jsx';

export function AppWrapper() {
    // const [theme, setTheme] = useState(THEME_DARK);

    return (
        // <ThemeContextProvider value={{ theme, setTheme }}>
        //     <App />
        //     <div>
        //         <h1>Hello World</h1>
        //     </div>
        // </ThemeContextProvider>
        <>
            <App />
        </>
    )
}
