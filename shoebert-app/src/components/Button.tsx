import React from "react";
import { createUseStyles } from "react-jss";
import theme from "../theme";

const useStyles = createUseStyles ({
button: {
    backgroundColor: theme.colors.white,
    cursor: "pointer",
    color: theme.colors.black,
    border: [1, "solid", theme.colors.black],
    width: 128,
    marginLeft: 99,
    maxWidth: "100%",
    fontSize: theme.typography.button,
    fontFamily: theme.font.fontFamily,
    padding: theme.spacing.s,
    zIndeks: 100,
    top:70,
    right:40,
    position: "fixed",
    "@media (max-width: 900px)": {
        display: "none"},
    transition: "background .2s ease-in-out",
      "&:hover": {
        borderColor: theme.colors.pink,
        color: theme.colors.pink,
  }},
});

type ButtonProps = {
  title: string;
};



const Button: React.FC<ButtonProps> = ({ title }) => {
    const classes = useStyles();
  return (
    <button className={classes.button}>
      {title}
    </button>
  );
};


export default Button;
