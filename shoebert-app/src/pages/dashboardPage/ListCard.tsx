import React from "react";
import { createUseStyles } from "react-jss";
import { Product } from "../../models/Product";
import theme from "../../common/theme";

const useStyles = createUseStyles({
  container: {
    border: [1, "solid", theme.colors.black],
    display: "flex",
    maxHeight: 200,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "left",
  },

  title: {
    color: theme.colors.black,
    fontSize: theme.typography.h2,
    fontFamily: theme.font.fontFamily,
    margin: 10,
  },

  price: {
    color: theme.colors.black,
    fontSize: theme.typography.h2,
    alignItems: "left",
    margin: 20,
  },

  description: {
    color: theme.colors.black,
    fontSize: theme.typography.body,
    fontFamily: theme.font.fontFamily,
    margin: 10,
    "@media (max-width: 1300px)": {
      display: "none",
    },
  },

  img: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    padding: [40, 20, 20, 20],
    "&>img": {
      width: "200px",
    },
  },

  dropdown: {
    color: theme.colors.black,
    fontSize: theme.typography.h4,
    fontFamily: theme.font.fontFamily,
    margin: 10,
    "@media (max-width: 1600px)": {
      display: "none",
    },
  },

  value: {
    color: theme.colors.black,
    fontSize: theme.typography.body,
    fontFamily: theme.font.fontFamily,
    width: 55,
    height: 40,
    margin: 15,
    border: [1, "solid", theme.colors.gray],
    background: theme.colors.white,
    "@media (max-width: 1700px)": {
      display: "none",
    },
  },

  flexItem2: {
    padding: 20,
    fontSize: theme.typography.h2,
  },

  flexItem3: {
    padding: 20,
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

type ListCardProps = {
  product: Product;
  addToCart: (product: Product) => void;
};

const ListCard: React.FC<ListCardProps> = ({ product, addToCart }) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <div>
          <div className={classes.img}>
            <img src={product.imageUrl} alt="Saabas" />
          </div>
        </div>
        <div className={classes.flexItem2}>
          <div className={classes.title}>{product.name}</div>
          <div className={classes.description}>{product.description}</div>
          <label className={classes.dropdown} htmlFor="size">
            Vali suurus:
          </label>
          <select className={classes.value} name="size" id="size">
            <option value={product.size}>{product.size}</option>
          </select>
        </div>
        <div className={classes.flexItem3}>
          <div className={classes.price}>{product.price} €</div> <br />
          <button
            className={classes.buttonAddToCart}
            onClick={() => addToCart(product)}
          >
            Lisa korvi
          </button>
        </div>
      </div>
      <br />
    </div>
  );
};

export default ListCard;
