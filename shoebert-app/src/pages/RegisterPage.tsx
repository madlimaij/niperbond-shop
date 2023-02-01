import React from "react";
import { createUseStyles } from "react-jss";
import Footer from "../components/Footer";
import LogoComp from "../components/LogoComp";
import PinkDiv from "../components/PinkDiv";
import RegisterBox from "../components/RegisterBox";
import theme from "../theme";
import LogoTrans from "../images/Logo_trans_png.png";
import Button from "../components/Button";

const useStyles = createUseStyles({
  pinkDiv: {
    backgroundColor: theme.colors.lightPink,
    textAlign: "center",
    padding: 41,
    fontSize: theme.spacing.l,
  },
});

const RegisterPage = () => {
  const classes = useStyles();
  return (
    <div>
      <LogoComp logosource={LogoTrans} />
      <PinkDiv cname={classes.pinkDiv} />
      <RegisterBox />
      <a href="/login">
          <Button title={"Logi sisse"} />
        </a>
      <Footer />
    </div>
  );
};

export default RegisterPage;
