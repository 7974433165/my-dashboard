import { createContext,useContext,useState,useEffect,ReactNode } from "react";
import { ThemeProvider,createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

interface ThemeContextType{
    darkMode:boolean;
    toggleTheme:()=>void;
}

const ThemeContext=createContext<ThemeContextType|undefined>(undefined);

export const useTheme=()=>{
    const context=useContext(ThemeContext);
    if(!context) throw new Error("useTheme must be used within ThemeProvider");
    return context;
};

export const ThemeProviderComponent=({children}:{children:ReactNode})=>{
    const[darkMode,setDarkMode]=useState<boolean>(()=>localStorage.getItem("theme")==="dark");

    useEffect(()=>{
        localStorage.setItem("theme",darkMode ?"dark":"light");
    },[darkMode]);

    const toggleTheme=()=>setDarkMode((prev)=>!prev);

    const theme=createTheme({palette:{mode:darkMode?"dark":"light"}});
    
    return(
        <ThemeContext.Provider value={{darkMode,toggleTheme}}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}
