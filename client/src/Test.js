import React from "react";
import "./App.css";
import { PromiseProvider } from "mongoose";

const Test = (props)=> {
    return(
        <div>
            <h1>Welcome {props.name}</h1>
            <h1>Custom artist data component </h1>

            </div>
    )
}

export default Test