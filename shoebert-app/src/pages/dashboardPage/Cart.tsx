import React from "react";
import Button from "../../components/Button";
import { createUseStyles } from "react-jss";
import theme from "../../theme";
import Saabas from "../../images/Saabas.png";
import Remove_icon from "../../images/Remove_icon.png";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    border: [1, "solid", theme.colors.black],
  },

  flexContainer1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },

  flexContainer2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 20,
  },

  flexItem1: {
    flexGrow: "0",
  },

  flexItem2: {
    flexGrow: "1",
    padding: 10,
  },

  flexItem3: {
    flexGrow: "0",
    padding: 20,
  },

  flexItem4: {
    background: theme.colors.lightGray,
    //backgroundColor: "grey",
    padding: 20,
  },

  flexItem5: {
    background: theme.colors.gray,
    /* marginRight: 20,
    marginBottom:20, */
    padding: 20,
  },

  title: {
    color: theme.colors.black,
    fontSize: theme.typography.h2,
    fontFamily: theme.font.fontFamily,
    padding: [0, 20, 0],
  },

  price: {
    color: theme.colors.black,
    fontWeight: "bold",
  },

  description: {
    text: theme.typography.body,
    fontFamily: theme.font.fontFamily,
    color: theme.colors.black,
  },
  img: {},

  removeIcon: {},
});

const Cart: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <h1 className={classes.title}>Ostukorv</h1>
        <div>
          <div className={classes.flexContainer1}>
            <div className={classes.flexItem1}>
              <div className={classes.img}>
                <img src={Saabas} alt="Saabas" />
              </div>
            </div>
            <div className={classes.flexItem2}>
              <div className={classes.description}>
                Soojad saapad, läigivad hästi! Suurus 38 132,12 €
              </div>
              {/* <div className={classes.description}>
            Suurus: 38
          </div>
          <div className={classes.price1}>
          132,12 
          </div> */}
            </div>
            <div className={classes.flexItem3}>
              <div className={classes.removeIcon}>
                <img src={Remove_icon} alt="Remove_icon" />
              </div>
            </div>
          </div>
          <div className={classes.flexContainer2}>
            <div className={classes.flexItem4}>
              <div /*className= {classes.sum} */>Summa:</div>
            </div>
            <div className={classes.flexItem5}>
              <div className={classes.price}>132,12 €</div>
            </div>
          </div>
          <a href="/login">
            <Button title="Lisa korvi"></Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
