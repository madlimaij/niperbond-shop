import React from "react";
import Button from "./Button";
import { createUseStyles } from "react-jss";
import theme from "../theme";
import Saabas from "../images/Saabas.png";

const useStyles = createUseStyles({
  container: {
    border: [1, "solid", theme.colors.black],
    padding: [10, 500, 10, 30],
    margin: 10,
    //position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",

    gap: 15,
  },

  title: {
    //color: theme.colors.black,
    //fontSize: theme.typography.h4,
    //fontFamily: theme.font.fontFamily
  },

  price: {
    //color: theme.colors.black,
    //fontSize: theme.typography.h3,
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
});

const ListCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.title}>MEESTE PENIKOORMASAAPAD</div>
      <div className={classes.description}>Soojad saapad, läigivad hästi!</div>
      <div className={classes.img}>
        <img src={Saabas} alt="Saabas" />
      </div>
      <div className={classes.price}>132,12 €</div>
      <label htmlFor="size">Vali suurus</label>
      <select name="size" id="size">
        <option value="36">36</option>
        <option value="38">38</option>
        <option value="40">40</option>
        <option value="43">43</option>
      </select>
      <Button title="Lisa korvi" pageLink="/login"></Button>
    </div>
  );
};

//pilt, kujundus,kirjeldus, button -vali suurus
export default ListCard;
