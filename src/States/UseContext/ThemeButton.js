import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ThemeButton(){
    const theme = useContext(ThemeContext);

    return(
        <button style={{background : theme === "light" ? "gray" : "yellow", color :theme === "light" ? "white" : "black" }}>Button with {theme} Theme</button>
    )
};

export default ThemeButton;