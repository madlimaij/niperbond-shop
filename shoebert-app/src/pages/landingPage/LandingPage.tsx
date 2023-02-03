import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { LogoComp, Footer } from '../../components';
import theme from '../../common/theme';
import LandingBody from './LandingBody';
import { LogoWhite, LogoTrans } from '../../images';

const useStyles = createUseStyles({
  footer: {
    backgroundColor: (darkMode: boolean) =>
      darkMode ? theme.colors.brown : theme.colors.lightBrown,
  },
  button: {
    border: [`transparent solid 1px`],
    width: 36,
    height: 36,
    backgroundColor: (darkMode: boolean) =>
      darkMode ? theme.colors.pink : theme.colors.lightPink,
    cursor: 'pointer',
    position: 'absolute',
    right: 40,
    top: 195,
    '&:hover': {
      border: (darkMode: boolean) =>
        darkMode
          ? [`${theme.colors.lightPink} solid 1px`]
          : [`${theme.colors.pink} solid 1px`],
    },
  },
});

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const classes = useStyles(darkMode);
  const handleDark = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <LogoComp logosource={darkMode ? LogoWhite : LogoTrans} />
      <button onClick={handleDark} className={classes.button}>
        <span className="material-symbols-outlined">
          {darkMode ? 'rainy' : 'light_mode'}
        </span>
      </button>
      <LandingBody darkMode={darkMode} />
      <Footer cname={classes.footer} />
    </div>
  );
};
export default LandingPage;
