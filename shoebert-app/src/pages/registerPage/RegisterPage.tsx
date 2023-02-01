import React from "react";
import { createUseStyles } from "react-jss";
import { LogoComp, PinkDiv, Button, Footer } from "../../components";
import theme from "../../theme";
import LogoTrans from "../../images/Logo_trans_png.png";
import RegisterBox from "./RegisterBox";

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
    </div>
  );
};
export default RegisterPage;
