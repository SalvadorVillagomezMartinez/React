import React from "react";
import ReactDom from 'react-dom/client';
import {GitExpertApp} from "./GigExpertApp"
import './styles.css'

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GitExpertApp></GitExpertApp>
    </React.StrictMode>
)