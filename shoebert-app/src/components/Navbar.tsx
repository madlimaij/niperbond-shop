import React from "react";
import Button from "./Button";
import { createUseStyles } from "react-jss";
import theme from "../theme";
import NavigationPng from "../images/NavigationPng.png";

const useStyles = createUseStyles({
  navWhite: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
    padding: 40,
  },
  logoPlaceholder: {
    //Võiks asendada buttoni laiusega, et brändinimi tuleks täpselt keskele?
    width: 227,
    top: 10,
    left: 15,
  },
});

const Navbar: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.navWhite}>
        <div className={classes.logoPlaceholder}></div>
        <img src={NavigationPng} alt="NavigationPng" />
        <Button title="Logi sisse" pageLink="/Login"></Button>
      </div>
    </div>
  );
};

//Todo: lisada logo (viib alati LandinPagesse), roosa triip, teha css, lisada nupp (komponent "Button").
//Todo: hiljem: Dasbboardile tuleb roosale triibule veel eraldi komponendid "Searchbar" ja "HelloUser" // Roosa triip viidud LandingBodyle.
//Todo: Buttoni link tuleb ära linkida, praegune lahendus ei tööta

export default Navbar;
