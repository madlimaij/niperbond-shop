import React from "react";
import { createUseStyles } from "react-jss";
import { LogoComp, PinkDiv, Button, Footer } from "../../components";
import theme from "../../theme";

import LogoWhite from "../../images/Logo_white_png.png";
import LandingBody from "./LandingBody";

const useStyles = createUseStyles({
  footer: {
    backgroundColor: theme.colors.brown,
  },
  
});
  
const LandingPage = () => {
  const classes = useStyles();
  const adText = "Seitsmepenikoormasaapad -70%"; //@Todo tee muutuja admin page'i kaudu muudetavaks.
  return (
    <div>
      <LogoComp logosource={LogoWhite} />
      {/*       <PinkDiv cname={classes.pinkDiv} adtext={adText} />*/}
      <LandingBody />
      <a href="/login">
        <Button title={"Logi sisse"} />
      </a>
      <Footer cname={classes.footer}/>
    </div>
  );
};
export default LandingPage;
