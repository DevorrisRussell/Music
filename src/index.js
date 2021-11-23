import React from "react";
import reactDom from "react-dom";
import App from "./component/App";
import "bootstrap/dist/css/bootstrap.css";




const rootElement = document.getElementById("root");
reactDom.render(
    <App />,
    rootElement

);