import { createContext, useEffect } from "react";
import { useState } from "react";

const themes = {
    dark: {
        backgroundColor: '#000',
        color: 'white',
        sidebarColor: '#1a1b1c'
    },
    light: {
        backgroundColor: 'white',
        color: 'black'
    },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(true)
    const theme = isDark ? themes.dark : themes.light;
    const toggleTheme = () => {
        localStorage.setItem('isDark', JSON.stringify(!isDark))
        setIsDark(!isDark);
    }

    useEffect(() => {
        const isDark = localStorage.getItem('isDark') === "true"
        setIsDark(isDark);
    }, [])

    return (
        <ThemeContext.Provider value={[{ theme, isDark }, toggleTheme]}>{children}</ThemeContext.Provider>
    )
};