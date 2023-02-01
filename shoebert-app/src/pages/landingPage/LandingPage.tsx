import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { LogoComp, PinkDiv, Button, Footer } from "../../components";
import theme from "../../common/theme";
import LandingBody from "./LandingBody";
import RegisterButton from "../../components/RegisterButton";
import { LogoWhite, LogoTrans } from "../../images";

const useStyles = createUseStyles({
  footerDark: {
    backgroundColor: theme.colors.brown,
  },
  footerLight: {
    backgroundColor: theme.colors.lightBrown,
  },
  button: {
    border: [`transparent solid 1px`],
    width: 36,
    height: 36,
    backgroundColor: theme.colors.pink,
    cursor: "pointer",
    position: "absolute",
    right: 40,
    top: 200,
    "&:hover": {
      border: [`${theme.colors.lightPink} solid 1px`],
    },
  },
  buttonSun: {
    border: [`transparent solid 1px`],
    width: 36,
    height: 36,
    backgroundColor: theme.colors.lightPink,
    cursor: "pointer",
    position: "absolute",
    right: 40,
    top: 200,
    "&:hover": {
      border: [`${theme.colors.pink} solid 1px`],
    },
  },
});

const LandingPage = () => {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const handleDark = () => {
    setDarkMode(!darkMode);
  };
  const adText = "Seitsmepenikoormasaapad -70%";
  return (
    <div>
      {darkMode ? (
        <LogoComp logosource={LogoWhite} />
      ) : (
        <LogoComp logosource={LogoTrans} />
      )}
      {darkMode ? (
        <button onClick={handleDark} className={classes.button}>
          <span className="material-symbols-outlined">rainy</span>
        </button>
      ) : (
        <button onClick={handleDark} className={classes.buttonSun}>
          <span className="material-symbols-outlined">light_mode</span>
        </button>
      )}
      <LandingBody darkMode={darkMode} />

      <a href="/register">
        <RegisterButton title={"Registreeru"} />
      </a>
      <a href="/login">
        <Button title={"Logi sisse"} />
      </a>

      {darkMode ? (
        <Footer cname={classes.footerDark} />
      ) : (
        <Footer cname={classes.footerLight} />
      )}
    </div>
  );
};
export default LandingPage;
