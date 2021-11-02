import React from "react";
import "./style.css";
import Button from "./Button";

const App = ()=> {
    /** React use jxs*/
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Helo world</h1>
            <Button title = "App stor" />
            <Button title = "Play stor"/>
        </div>        
    );
}

export default App;