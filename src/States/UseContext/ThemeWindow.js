import { useState } from "react";
import ThemeButton from "./ThemeButton";
import ThemeContext from "./ThemeContext";


function ThemeWindow(){
    const [theme, setTheme] = useState("light");

    return(
        <ThemeContext.Provider value={theme}>
          

            <div style={{background : theme === "light" ? "white" : "black", color: theme === "light" ? "black" : "white", padding : "50px"}}>
                <h2>Current Theme: {theme}</h2><br /> <br />
                <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Toggle Theme</button>
                <ThemeButton />
            </div>
            </ThemeContext.Provider>

    )
}

export default ThemeWindow;