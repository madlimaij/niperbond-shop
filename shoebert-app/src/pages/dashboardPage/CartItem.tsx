import React from "react";
import theme from "../../theme";
import { createUseStyles } from "react-jss";
import Saabas from "../../images/Saabas.png";
import Remove_icon from "../../images/Remove_icon.png";
import { CartItemType } from "../../models/Cart";
import { deleteCartItem } from "../../api/controller/shopController";

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
  img: {
    "&>img": {
      width: "70px",
    },
  },

  removeIcon: {},
});

type CartItemProps = {
  product: CartItemType;
  /*   onClick: () => void, */
};

const CartItem: React.FC<CartItemProps> = ({ product /* , onClick */ }) => {
  const classes = useStyles();
  const deleteItem = async () => {
    const response = await deleteCartItem(product);
    console.log(response);
  };
  return (
    <div>
      <div className={classes.flexContainer1}>
        <div className={classes.flexItem1}>
          <div className={classes.img}>
            <img src={product.imageUrl} alt="Saabas" />
          </div>
        </div>
        <div className={classes.flexItem2}>
          <div className={classes.description}>
            <div>{product.name}</div>
            <div>{`Suurus: ${product.size}`}</div>
            <div>{`Hind: ${product.price} €`}</div>
          </div>
        </div>
        <div className={classes.flexItem3}>
          <div className={classes.removeIcon}>
            <a href="">
              <img src={Remove_icon} alt="Remove_icon" onClick={deleteItem} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
