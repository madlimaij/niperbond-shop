import React from "react";
import { createUseStyles } from "react-jss";
import Footer from "../../components/Footer";
import LoginBox from "./LoginBox";
import LogoComp from "../../components/LogoComp";
import PinkDiv from "../../components/PinkDiv";
import theme from "../../common/theme";
import { LogoTrans } from "../../images";
import { Button } from "../../components";

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
      <LogoComp logosource={LogoTrans} />
      <PinkDiv cname={classes.pinkDiv} />
      <LoginBox />
      <Footer />
      <a href="/register">
        <Button title={"Registreeru"} />
      </a>
      ;
    </div>
  );
};

export default LoginPage;
