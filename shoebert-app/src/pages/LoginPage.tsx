import React from "react";
import { createUseStyles } from "react-jss";
import Footer from "../components/Footer";
import LoginBox from "../components/LoginBox";
import PinkDiv from "../components/PinkDiv";
import theme from "../theme";

const useStyles = createUseStyles({
  pinkDiv: {
    backgroundColor: theme.colors.lightPink,
    textAlign: "center",
    heigth: "79px",
    padding: 41,
    fontSize: theme.spacing.l,
  },
});

const LoginPage = () => {
  const classes = useStyles();
  return (
    <div>
      <PinkDiv cname={classes.pinkDiv} />
      <LoginBox />,
      <Footer />
    </div>
  );
};

export default LoginPage;
