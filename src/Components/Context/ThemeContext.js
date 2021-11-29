import React, { createContext, useState} from 'react';

// Crear Contexto de Theme
export const ThemeContext = createContext();

// Crear el Provider del Contexto
export default function ThemeProvider ({ children }) {
    // Crear State del Contexto
    const [darkTheme, setDarkTheme] = useState(false);

    // Pasar el State al Provider
    return (
        <ThemeContext.Provider value={{ darkTheme, setDarkTheme}}>
            {children}
        </ThemeContext.Provider>
    );

}