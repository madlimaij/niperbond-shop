import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { PinkDiv } from "../../components";
import theme from "../../common/theme";
import { RailBoots, RainyBoots } from "../../images";

const useStyles = createUseStyles({
  containerDark: {
    backgroundImage: `url(${RailBoots})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minWidth: "100%",
    minHeight: "100%",
    height: "100vh",
  },
  containerLight: {
    backgroundImage: `url(${RainyBoots})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minWidth: "100%",
    minHeight: "100%",
    height: "100vh",
  },
  buttonGoShop: {
    position: "fixed",
    right: 110,
    bottom: 200,
    height: 60,
    width: 250,
    fontSize: theme.spacing.xl,
    cursor: "pointer",
    opacity: "70%",
    fontWeight: "bold",
    fontFamily: theme.font.fontFamily,
    transition: "background .2s ease-in-out",
    "&:hover": {
      color: theme.colors.pink,
      opacity: "100%",
    },
  },

  slogan: {
    backgroundColor: "white",
    fontSize: theme.spacing.l,
    fontWeight: "bold",
    height: "auto",
    width: "fit-content",
    padding: 10,
    position: "relative",
    top: 150,
    left: 200,
    border: 1,
    borderColor: theme.colors.black,
    opacity: "70%",
  },
  pinkDivDark: {
    backgroundColor: theme.colors.pink,
    textAlign: "center",
    heigth: "79px",
    padding: 25,
    fontSize: theme.spacing.l,
  },
  pinkDivLight: {
    backgroundColor: theme.colors.lightPink,
    textAlign: "center",
    heigth: "79px",
    padding: 25,
    fontSize: theme.spacing.l,
  },
});

type LandingBodyProps = {
  darkMode: boolean;
};
const LandingBody: React.FC<LandingBodyProps> = ({ darkMode }) => {
  const adText = "Seitsmepenikoormasaapad -70%";
  const classes = useStyles();
  return (
    <div className={darkMode ? classes.containerDark : classes.containerLight}>
      <br />
      <PinkDiv
        cname={darkMode ? classes.pinkDivDark : classes.pinkDivLight}
        adtext={adText}
      />

      <p className={classes.slogan}>Mehised saapad.</p>
      {darkMode ? (
        <p className={classes.slogan}>Rüblikule, kelle elu on rööpas.</p>
      ) : (
        <p className={classes.slogan}>Poriloikudes keksimiseks.</p>
      )}
      <a href="/login">
        <button className={classes.buttonGoShop}>MINE POODI</button>
      </a>
    </div>
  );
};

export default LandingBody;
