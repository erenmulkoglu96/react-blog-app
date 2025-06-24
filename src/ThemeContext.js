// import
import { createContext, useState } from "react";

// CreateContext
const ThemeContext= createContext();


// Provider 
const ThemeProvider=({children})=>{
    const [theme,setTheme]=useState("light");


    // ToggleTheme
    const toggleTheme=()=>{
        setTheme((prevTheme)=> (prevTheme=== 'light' ?'dark':'light'));
    };

    return(
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    ); //end return
}; //end ThemeProvider

// Export
export {ThemeProvider, ThemeContext};