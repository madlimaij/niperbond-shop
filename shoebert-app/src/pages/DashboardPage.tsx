import React from "react";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import ListCard from "../components/ListCard";
import { createUseStyles } from "react-jss";
import theme from "../theme";
import PinkDiv from "../components/PinkDiv";
import LogoComp from "../components/LogoComp";
import LogoTrans from "../images/Logo_trans_png.png";
import Button from "../components/Button";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    alignContent: "space-between",
    gap: 15,
    margin: 50,
  },
  listCard: {
    display: "flex",
    flexDirection: "column",
    flexGrow: "2",
    width: "100%"
    /* color: theme.colors.black,
    fontSize: theme.typography.h4,
    fontFamily: theme.font.fontFamily */
  },
  cart: {
    display: "flex",
    border: [1, theme.colors.black],
    /*color: theme.colors.black,*/
    flexGrow: "1",
    height: "100%"
  },

  pinkDiv: {
    backgroundColor: theme.colors.lightPink,
    textAlign: "center",
    heigth: "79px",
    padding: 25,
    fontSize: theme.spacing.l,
  },
});

const DashboardPage = () => {
  const classes = useStyles();
  const adText = "Tere tulemast, Kasutaja!"; //@Todo: muuda kasutaja dünaamiliseks.
  return (
    <div>
      <LogoComp logosource={LogoTrans} />
      <PinkDiv cname={classes.pinkDiv} adtext={adText} />
      <div className={classes.container}>
        <div className={classes.listCard}>
          <ListCard /> <br />
          <ListCard /> <br />
          <ListCard /> <br />
        </div>
        <div className={classes.cart}>
          <Cart />
        </div>
        <a href="/">
          <Button title={"Logi välja"} />
        </a>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardPage;
