import React from 'react';
import { createUseStyles } from 'react-jss';
import { useLocation, useNavigate } from 'react-router-dom';
import { removeAuthToken } from '../helpers/authHelpers';
import NavigationPng from '../images/NavigationPng.png';
import Button from './buttons/NavButton';

const useStyles = createUseStyles({
  navWhite: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    padding: 30,
    height: '13vh',
  },
  shopName: {
    height: '14vh',
  },
  registerButton: {
    '@media (max-width: 1200px)': {
      display: 'none',
    },
    right: (path: string) => path === '/' && 190,
  }
});

const Navbar: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;
  const classes = useStyles(path);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeAuthToken();
    navigate("/")
  };

  return (
    <div>
      <div className={classes.navWhite}>
        <a href={'/'}>
          <img
            src={NavigationPng}
            alt="NavigationPng"
            className={classes.shopName}
          />
        </a>
        <Button
          title={'Registreeru'}
          onClick={() => navigate('/register')}
          className={classes.registerButton}
          hide={location.pathname === ('/register' || '/dashboard')}
        />
        <Button
          title={'Logi sisse'}
          onClick={() => navigate('/login')}
          hide={location.pathname === ('/login' || '/dashboard')}
        />
        <Button
          title={'Logi välja'}
          onClick={handleLogout}
          hide={location.pathname !== '/dashboard'}
        />
      </div>
    </div>
  );
};

export default Navbar;
