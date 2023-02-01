import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import theme from "../../common/theme";
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
    margin: "calc((100vh - 692px)/2)",
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
    margin: 5,
    width: 470,
    maxWidth: "100%",
    position: "relative",
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
    };

    const response = await registerUser(newUser);
    if (response.isSuccess === true) {
      const { accessToken } = response.body;
      if (accessToken) {
        setAuthToken(accessToken);
        navigate("/dashboard");
      }
    }
  };

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
          id="email_input"
          required
          placeholder="E-posti aadress"
          {...register("email")}
        />{" "}
        <br />
        <input
          className={classes.field}
          type="password"
          pattern=".{8,}"
          required
          title="minimaalselt 8 tähemärki"
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
