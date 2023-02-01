import React from "react";
import Button from "../../components/Button";
import { createUseStyles } from "react-jss";
import theme from "../../theme";
import { findByLabelText } from "@testing-library/react";
import { isWhiteSpaceSingleLine } from "typescript";

const useStyles = createUseStyles({
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    margin: 150,
  },

  title: {
    color: theme.colors.black,
    fontSize: theme.typography.h2,
  },

  field: {
    position: "relative",
    width: 450,
    height: 40,
    margin: 5,
    maxWidth: "100%",
    background: theme.colors.lightLightPink,
    padding: theme.spacing.s,
    border: [1, "dashed", theme.colors.pink],
    fontSize: theme.typography.h4,
    fontFamily: theme.font.fontFamily,
  },

  button: {
    backgroundColor: "#dedede" /*vaja lisada theme)*/,
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

const RegisterBox = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.title}>Registreeru kasutajaks:</div>
      <form>
        <input
          className={classes.field}
          type="text"
          placeholder="Ees- ja perekonnanimi"
        />{" "}
        <br />
        <input
          className={classes.field}
          type="text"
          placeholder="E-posti aadress"
        />{" "}
        <br />
        <input
          className={classes.field}
          type="text"
          placeholder="Salasõna"
        />{" "}
        <br />
        <input
          className={classes.field}
          type="text"
          placeholder="Korda salasõna"
        />{" "}
        <br />
      </form>
      <a href="/login">
        <button className={classes.button}>Logi sisse</button>
      </a>
    </div>
  );
};

export default RegisterBox;
