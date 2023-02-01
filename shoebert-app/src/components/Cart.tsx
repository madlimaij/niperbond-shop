import React from "react";
import Button from "./Button";
import { createUseStyles } from "react-jss";
import theme from "../theme";
import Saabas from "../images/Saabas.png";
import Remove_icon from "../images/Remove_icon.png";

const useStyles = createUseStyles({
  container: {
    position: "fixed",
    padding: [10, 20, 100, 20],
    right: 30,
    color: theme.colors.pink,
    border: [1,"solid", theme.colors.black],
  },

  title: {
    //color: theme.colors.black,
    // fontSize: theme.typography.h4,
    //fontFamily: theme.font.fontFamily,
  },

  price: {
    //color: theme.colors.black,
    // fontSize: theme.typography.h3,
  },

  description: {
    /* position: "relative",
      width: 450,
      height: 40,
      margin: 5,
      maxWidth: "100%",
      background: theme.colors.lightLightPink,
      //*padding: theme.spacing.s,
      border: [1, "dashed", theme.colors.pink],
      text: theme.typography.h4,
      fontFamily: theme.font.fontFamily */
  },
  img: {
    /* color: theme.colors.black,
        fontSize: theme.typography.h2 */
  },

  removeIcon: {
    //color: theme.colors.black,
    //fontSize: theme.typography.h3,
  },
});

const Cart = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <h1 className={classes.title}>Ostukorv</h1>
        <div>
          <div className={classes.description}>
            Soojad saapad, läigivad hästi!
          </div>
          <div className={classes.img}>
            <img src={Saabas} alt="Saabas" />
          </div>
          <div className={classes.removeIcon}>
            <img src={Remove_icon} alt="Remove_icon" />
          </div>
          <div>Size</div>
          <div className={classes.price}>132,12 €</div>
        </div>
        <div>
          <div>Summa:</div>
          <Button title="Maksma" pageLink="/login"></Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
