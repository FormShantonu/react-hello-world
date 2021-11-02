import React from "react";
import "./style.css";

const Button = ({title = "noting"})=>(<button className="btn">{title}</button>)

export default Button;