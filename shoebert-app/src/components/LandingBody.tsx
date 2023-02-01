import React from "react";
import { createUseStyles } from "react-jss";
import RailBoots from "../images/RailBoots.jpg";
import theme from "../theme";

const useStyles = createUseStyles({
  gap: {
    padding: 5,
    opacity: 0,
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
    fontSize: 24,
    height: "auto",
    width: "40%", //@Todo: muuta kasti suurus relatiivseks
    padding: 5,
    position: "relative",
    top: 100,
    left: 200,
    border: 1,
    borderColor: theme.colors.black,
    opacity: "70%",
  },
});

const LandingBody: React.FC = () => {
  const adText = "Seitsmepenikoormasaapad -70%"; //@Todo tee muutuja admin page'i kaudu muudetavaks.
  const classes = useStyles();
  return (
    <div
      style={{
        backgroundImage: `url('${RailBoots}'`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minWidth: "100%",
        minHeight: "100%",
        height: "auto",
        position: "absolute",
        left: 0,
      }}
    >
      <div className={classes.gap}></div>
      <div className={classes.slogan}>
        Mehised saapad. Poriloikudes keksimiseks.
        {/* @Todo: Tekst muudetavaks? Tekst vahetub koos pildiga? */}
      </div>
      <a href="/login">
        <button className={classes.buttonGoShop}>MINE POODI</button>
      </a>
    </div>
  );
};

//Teha css, lisada slogan ja nupp (see nupp on komponent "BodyButton", mis viib login lehele)

export default LandingBody;
