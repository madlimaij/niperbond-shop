import React from "react";
import theme from "../../theme";
import { createUseStyles } from "react-jss";
import Saabas from "../../images/Saabas.png";
import Remove_icon from "../../images/Remove_icon.png";
import { CartItemType } from "../../models/Cart";

const useStyles = createUseStyles({
  flexContainer1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  description: {
    text: theme.typography.body,
    fontFamily: theme.font.fontFamily,
    color: theme.colors.black,
  },
  img: {},

  removeIcon: {},
});

const CartItem: React.FC<CartItemType> = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.flexContainer1}>
        <div className={classes.flexItem1}>
          <div className={classes.img}>
            <img src={props.imageUrl} alt="Saabas" />
          </div>
        </div>
        <div className={classes.flexItem2}>
          <div className={classes.description}>
            <div>{props.name}</div>
            <div>{`Suurus: ${props.size}`}</div>
            <div>{`Hind: ${props.price}`}</div>
          </div>
        </div>
        <div className={classes.flexItem3}>
          <div className={classes.removeIcon}>
            <img src={Remove_icon} alt="Remove_icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
