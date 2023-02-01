import React from "react";
import { createUseStyles } from "react-jss";
import { LogoComp, PinkDiv, Button, Footer } from "../../components";
import theme from "../../common/theme";
import RegisterBox from "./RegisterBox";
import { LogoTrans } from "../../images";

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
