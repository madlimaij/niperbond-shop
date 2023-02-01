import React from "react";
import { createUseStyles } from "react-jss";
import theme from "../common/theme";

const useStyles = createUseStyles({
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
    top: 70,
    right: 200,
    position: "absolute",
    "@media (max-width: 1200px)": {
      display: "none",
    },
    transition: "background .2s ease-in-out",
    "&:hover": {
      borderColor: theme.colors.pink,
      color: theme.colors.pink,
    },
  },
});

type RegisterButtonProps = {
  title: string;
  onClick?: () => void;
};

const RegisterButton: React.FC<RegisterButtonProps> = ({ title, onClick }) => {
  const classes = useStyles();
  return (
    <button className={classes.button} onClick={onClick}>
      {title}
    </button>
  );
};

export default RegisterButton;
