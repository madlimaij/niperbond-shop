import React from "react";
import { createUseStyles } from "react-jss";
import theme from "../theme";

type ButtonProps = {
    title: string;
    pageLink: any
}


//Todo. muuta Any õigeks, 
//Todo tulevikus, erinevate buttonite võimalused


const Button: React.FC<ButtonProps> = ({title, pageLink}) => {
       
    return (
       
        <button onClick={pageLink}>{title}</button>
        
    )
}

export default Button;