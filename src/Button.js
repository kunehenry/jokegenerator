import React from "react";
import "./Button.css";

function Button(props) {
    return <button className="btn" onClick={props.click}>New Joke</button>;
}

export default Button;