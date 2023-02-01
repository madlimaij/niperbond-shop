import React from "react";
import { createUseStyles } from "react-jss";
import theme from "../theme";
import NavigationPng from "../images/NavigationPng.png";

const useStyles = createUseStyles({
  navWhite: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    padding: 40,
  },
  },
);

const Navbar: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.navWhite}>
      <a href={"/"}><img src={NavigationPng} alt="NavigationPng" /></a>
      </div>
    </div>
  );
};


export default Navbar;
