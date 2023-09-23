import React from "react";
import ReactDom from 'react-dom/client';
import './styles.css'
import { FirstApp } from "./FirstApp";
import { CounterApp } from "./Counter-app";
FirstApp

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp name="Max Verstappen"
            message="you are the world champion"
            title={2}
            team="RedBull Racing" />
        <CounterApp value={5}/>
    
    </React.StrictMode>
)