import React from "react";
import { createUseStyles } from "react-jss";
import { LogoComp, PinkDiv, Footer } from "../../components";
import theme from "../../common/theme";
import RegisterBox from "./RegisterBox";
import { LogoTrans } from "../../images";

const useStyles = createUseStyles({
  pinkDiv: {
    backgroundColor: theme.colors.lightPink,
    textAlign: "center",
    heigth: "79px",
    fontSize: theme.spacing.l,
  },
});

const RegisterPage:React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <LogoComp logosource={LogoTrans} />
      <PinkDiv cname={classes.pinkDiv} />
      <RegisterBox />
      <Footer />
    </div>
  );
};
export default RegisterPage;
