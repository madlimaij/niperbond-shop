import React from "react";
import { createUseStyles } from "react-jss";
import NavigationPng from "../images/NavigationPng.png";

const useStyles = createUseStyles({
  navWhite: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    padding: 30,
    height:"13vh",
  },
  shopName: {
    height: "14vh",
  }
});

const Navbar: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.navWhite}>
        <a href={"/"}>
          <img src={NavigationPng} alt="NavigationPng" className={classes.shopName}/>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
