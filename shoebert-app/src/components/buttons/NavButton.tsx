import React from 'react';
import { createUseStyles } from 'react-jss';
import theme from '../../common/theme';

const useStyles = createUseStyles({
  button: {
    display: (hide: boolean) => hide && 'none',
    backgroundColor: theme.colors.white,
    cursor: 'pointer',
    color: theme.colors.black,
    border: [1, 'solid', theme.colors.black],
    width: 128,
    marginLeft: 99,
    maxWidth: '100%',
    fontSize: theme.typography.button,
    fontFamily: theme.font.fontFamily,
    padding: theme.spacing.s,
    zIndex: 100,
    top: 70,
    right: 40,
    position: 'absolute',
    '@media (max-width: 1000px)': {
      display: 'none',
    },
    transition: 'background .2s ease-in-out',
    '&:hover': {
      borderColor: theme.colors.pink,
      color: theme.colors.pink,
    },
  },
});

type ButtonProps = {
  title: string;
  onClick?: () => void;
  className?: string;
  hide?: boolean;
};

const Button: React.FC<ButtonProps> = ({ title, onClick, className, hide }) => {
  const classes = useStyles(hide);
  return (
    <button className={`${classes.button} ${className}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
