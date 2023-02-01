import React from "react";
import { createUseStyles } from "react-jss";
import theme from "../../theme";
import Saabas from "../../images/Saabas.png";

const useStyles = createUseStyles({
  container: {
    border: [1, "solid", theme.colors.black],
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "left",
  },

  title: {
    color: theme.colors.black,
    fontSize: theme.typography.h4,
    fontFamily: theme.font.fontFamily,
    margin: 20,
  },

  price: {
    color: theme.colors.black,
    fontSize: theme.typography.h3,
    alignItems: "left",
    margin: 20,
  },

  description: {
    color: theme.colors.black,
    fontSize: theme.typography.body,
    fontFamily: theme.font.fontFamily,
    margin: 20,
  },

  img: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  dropdown: {
    color: theme.colors.black,
    fontSize: theme.typography.body,
    fontFamily: theme.font.fontFamily,
    margin: 20,
  },

  value: {
    color: theme.colors.black,
    fontSize: theme.typography.body,
    fontFamily: theme.font.fontFamily,
    width: 55,
    height: 40,
    margin: 25,
    border: [1, "solid", theme.colors.gray],
    background: theme.colors.white,
  },

  flexItem1: {
    //width: 300,
    //height: 300,
    background: theme.colors.gray,
  },

  flexItem2: {
    padding: 20,
    background: theme.colors.lightGray,
  },

  flexItem3: {
    padding: 20,
    background: theme.colors.gray,
  },

  buttonAddToCart: {
    backgroundColor: theme.colors.white,
    cursor: "pointer",
    color: theme.colors.black,
    border: [1, "solid", theme.colors.black],
    width: 128,
    maxWidth: "100%",
    fontSize: theme.typography.button,
    fontFamily: theme.font.fontFamily,
    padding: theme.spacing.s,
    transition: "background .2s ease-in-out",
    "&:hover": {
      borderColor: theme.colors.pink,
      color: theme.colors.pink,
    },
  },
});

const ListCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.flexItem1}>
        <div className={classes.img}>
          <img src={Saabas} alt="Saabas" />
        </div>
      </div>
      <div className={classes.flexItem2}>
        <div className={classes.title}>MEESTE PENIKOORMASAAPAD</div>
        <div className={classes.description}>
          Soojad saapad, läigivad hästi!
        </div>
        <label className={classes.dropdown} htmlFor="size">
          Vali suurus:
        </label>
        <select className={classes.value} name="size" id="size">
          <option value="36">36</option>
          <option value="38">38</option>
          <option value="40">40</option>
          <option value="43">43</option>
        </select>
      </div>
      <div className={classes.flexItem3}>
        <div className={classes.price}>132,12 €</div> <br />
        <button
          className={classes.buttonAddToCart}
          onClick={() => alert("Ei läinud korvi, kliki uuesti!")}
        >
          Lisa korvi
        </button>
      </div>
    </div>
  );
};

export default ListCard;
