import React from "react";
import { createUseStyles } from "react-jss";
import { LogoComp, PinkDiv, Button, Footer } from "../../components";
import theme from "../../theme";

import LogoWhite from "../../images/Logo_white_png.png";
import LandingBody from "./LandingBody";

/* const useStyles = createUseStyles({
  pinkDiv: {
    backgroundColor: theme.colors.pink,
    textAlign: "center",
    heigth: "79px",
    padding: 25,
    fontSize: theme.spacing.l,
  },
}); */
const LandingPage = () => {
  /*   const classes = useStyles(); */
  const adText = "Seitsmepenikoormasaapad -70%"; //@Todo tee muutuja admin page'i kaudu muudetavaks.
  return (
    <div>
      <LogoComp logosource={LogoWhite} />
      {/*       <PinkDiv cname={classes.pinkDiv} adtext={adText} />*/}
      <LandingBody />
      <a href="/login">
        <Button title={"Logi sisse"} />
      </a>
      <Footer />
    </div>
  );
};
export default LandingPage;
