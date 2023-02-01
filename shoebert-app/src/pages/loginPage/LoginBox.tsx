import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import theme from "../../theme";

const useStyles = createUseStyles({
  container: {
    position: "relative",
    display: "flex",
    gap: 15,
    //Hiljem margin asendada top: 305,??
    margin: 150,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  inputBox: {
    position: "relative",
    width: 450,
    margin: 5,
    maxWidth: "100%",
    color: theme.colors.black,
    padding: theme.spacing.s,
    background: theme.colors.lightLightPink,
    border: [1, "dashed", theme.colors.pink],
    fontSize: theme.typography.h4,
    fontFamily: theme.font.fontFamily,
  },

  link: {
    color: theme.colors.pink,
    fontSize: theme.typography.h4,
    textDecoration: "underline",
    cursor: "pointer",
  },

  containerTitle: {
    fontSize: theme.typography.h2,
    color: theme.colors.black,
  },

  containerText: {
    fontSize: theme.typography.h4,
    color: theme.colors.black,
  },

  button: {
    backgroundColor: "#dedede" /*vaja lisada theme lightgray)*/,
    cursor: "pointer",
    color: theme.colors.black,
    border: "none",
    width: 470,
    maxWidth: "100%",
    fontSize: theme.typography.h4,
    fontFamily: theme.font.fontFamily,
    padding: theme.spacing.s,
    transition: "background .2s ease-in-out",
    "&:hover": {
      background: theme.colors.gray,
    },
  },
});

const LoginBox = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.containerTitle}>Logi sisse:</div>
      <form>
        <input
          type="text"
          placeholder="E-posti aadress"
          className={classes.inputBox}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Parool"
          className={classes.inputBox}
        />{" "}
        <br />
      </form>
      <a
        className={classes.link}
        onClick={() => alert("aga.. Proovi veel, äkki tuleb ikka meelde?")}
      >
        Unustasid parooli?
      </a>
      <a href="/dashboard">
        <button className={classes.button}>Logi sisse</button>
      </a>
      <div className={classes.containerText}>
        Pole kontot?{" "}
        <a href="/register" className={classes.link}>
          Registreeru
        </a>
      </div>
    </div>
  );
};

//kogu container keskele ja vasakule? Kuidas teha

export default LoginBox;
