import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useNavigate } from 'react-router-dom';
import { Footer, LogoComp, PinkDiv, SearchBar } from '../../components';
import Cart from './Cart';
import ListCard from './ListCard';
import theme from '../../common/theme';
import useEffectAsync from '../../common/useEffectAsync';
import { getCurrentUser } from '../../api/controller/authController';
import { AuthUser } from '../../models/AuthUser';
import {
  addCartItem,
  deleteCartItem,
  getCartItems,
  getProductList,
} from '../../api/controller/shopController';
import { getAuthToken } from '../../helpers/authHelpers';
import { Product } from '../../models/Product';
import { CartItemType } from '../../models/Cart';
import { LogoTrans, SadManImg } from '../../images';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'space-between',
    gap: 15,
    margin: [50, 150],
    minHeight: '54.5vh',
  },
  listCard: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '2',
    width: '100%',
  },
  cart: {
    display: 'flex',
    border: [1, theme.colors.black],
    flexGrow: '1',
    height: '100%',
  },
  sadManImage: {
    width: 'auto',
    height: '50vh',
    margin: 'auto',
    border: [`${theme.colors.black} solid 1px`],
  },
  pinkDiv: {
    backgroundColor: theme.colors.lightPink,
    textAlign: 'center',
    heigth: '79px',
    fontSize: theme.spacing.l,
  },
});

const DashboardPage = () => {
  const classes = useStyles();
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);
  const [productList, setProductList] = useState<Product[] | null>(null);
  const [cartItemList, setCartItemList] = useState<CartItemType[]>([]);
  const [searchResult, setSearchResult] = useState<Product[] | null>(null);
  const [hasNoToken, setHasNoToken] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffectAsync(async () => {
    const response = await getCurrentUser();
    const navigation = () => navigate('/');
    if (response.isSuccess === true) {
      setCurrentUser(response.body);
    } else {
      window.setTimeout(navigation, 5000);
    }
  }, []);

  useEffectAsync(async () => {
    const tokenOk = getAuthToken();
    if (!tokenOk) {
      setHasNoToken(true);
    }
  }, []);

  useEffectAsync(async () => {
    const response = await getProductList();
    if (response.isSuccess === true) {
      setProductList(response.body);
    }
  }, []);

  useEffectAsync(async () => {
    const response = await getCartItems();
    if (response.isSuccess === true) {
      setCartItemList(response.body);
    }
  }, []);

  const addToCart = async (product: Product) => {
    const cartItem = {
      name: product.name,
      price: product.price,
      size: product.size,
      imageUrl: product.imageUrl,
    };
    const response = await addCartItem(cartItem);
    if (response.isSuccess === true) {
      setCartItemList([...cartItemList, response.body]);
    }
  };
  const deleteItem = async (product: CartItemType) => {
    const isSuccess = await deleteCartItem(product);
    if (isSuccess) {
      const filterItems = cartItemList.filter((el) => product.id !== el.id);
      setCartItemList(filterItems);
    } else {
      alert('Proovi uuesti!');
    }
  };

  const adText = `Tere tulemast, ${currentUser?.firstName} ${currentUser?.lastName}!`;
  const noUserText = `Midagi läks viltu :(. Suuname su peagi algusesse tagasi...`;

  return (
    <div>
      <LogoComp logosource={LogoTrans} />
      <PinkDiv
        cname={classes.pinkDiv}
        adtext={!hasNoToken ? adText : noUserText}
      />
      {hasNoToken && (
        <SearchBar
          productList={productList}
          setSearchResult={setSearchResult}
        />
      )}
      <div className={classes.container}>
        {hasNoToken ? (
          <img
            src={SadManImg}
            alt="SadManImg"
            className={classes.sadManImage}
          />
        ) : (
          <>
            <div className={classes.listCard}>
              {!hasNoToken && searchResult
                ? searchResult?.map((el) => (
                    <ListCard product={el} addToCart={addToCart} key={el.id} />
                  ))
                : productList?.map((el) => (
                    <ListCard product={el} addToCart={addToCart} key={el.id} />
                  ))}
            </div>
            <div className={classes.cart}>
              <Cart deleteItem={deleteItem} cartList={cartItemList} />
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default DashboardPage;
