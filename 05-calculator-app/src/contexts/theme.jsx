import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const initialState = {
    theme: "t1"
}

const ThemeContext = createContext(initialState);

export function ThemeProvider({children}) {
    const [state, setState] = useState(initialState);

    function updateTheme(theme) {
        setState({theme});
    }

    return (
        <ThemeContext.Provider value={{
            theme: state.theme,
            updateTheme
        }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context == undefined) {
        throw new Error("useTheme was used outside ThemeProvider!");
    }

    return context;
}