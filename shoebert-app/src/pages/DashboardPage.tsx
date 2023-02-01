import React from "react";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import ListCard from "../components/ListCard";
import { createUseStyles } from "react-jss";
import theme from "../theme";
import PinkDiv from "../components/PinkDiv";
import LogoComp from "../components/LogoComp";
import LogoTrans from "../images/Logo_trans_png.png";

const useStyles = createUseStyles({
  container: {
    // position: "relative",
    display: "flex",
    flexDirection: "row",
    /*   justifyContent: "center",
    alignItems: "center", */
    gap: 15,
    //top: 200,
    margin: 50,
  },
  listCard: {
    display: "flex",
    flexDirection: "column",
    /* color: theme.colors.black,
    fontSize: theme.typography.h4,
    fontFamily: theme.font.fontFamily */
  },
  /* cart: {
  display: "flex",
    flexDirection: "column",
    border: [1, theme.colors.black],
    /* color: theme.colors.black,
    fontSize: theme.typography.h4,
    fontFamily: theme.font.fontFamily 
  },

 */
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
          <ListCard />
          <ListCard />
          <ListCard />
        </div>
        <div /* className={classes.cart} */>
          <Cart />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardPage;
