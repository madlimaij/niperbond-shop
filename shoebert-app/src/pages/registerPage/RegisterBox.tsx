import React from "react";
import Button from "../../components/NavButton";
import { createUseStyles } from "react-jss";
import theme from "../../theme";
import { findByLabelText } from "@testing-library/react";
import { isWhiteSpaceSingleLine } from "typescript";
import { useForm, FieldValues } from "react-hook-form";
import { registerUser } from "../../api/controller/authController";
import { setAuthToken } from "../../helpers/authHelpers";
import { useNavigate } from "react-router-dom";

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
    backgroundColor: theme.colors.lightGray,
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

const RegisterBox: React.FC = () => {
  const classes = useStyles();
  const { handleSubmit, register } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (formValues: FieldValues) => {
    const newUser = {
      email: formValues.email,
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      password: formValues.password,
    }

    const response = await registerUser(newUser);
if (response.isSuccess === true) {
  const {accessToken} =response.body;
  if (accessToken) {
    setAuthToken(accessToken);
    navigate ("/dashboard");
  }
}
    //console.log(response)
  }

  return (
    <div className={classes.container}>
      <div className={classes.title}>Registreeru kasutajaks:</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
        className={classes.field} 
        type="text" 
        placeholder="Eesnimi"
        {...register("firstName")}
        />{" "}
        <br />
        <input
          className={classes.field}
          type="text"
          placeholder="Perekonnanimi"
          {...register("lastName")}
        />{" "}
        <br />
        <input
          className={classes.field}
          type="email"
          placeholder="E-posti aadress"
          {...register("email")}
        />{" "}
        <br />
        <input
          className={classes.field}
          type="password"
          placeholder="Salasõna"
          {...register("password")}
        />{" "}
        <br />
        <a href="/login">
        <button className={classes.button}>Registreeru</button>
      </a>
      </form>
    </div>
  );
};

export default RegisterBox;
