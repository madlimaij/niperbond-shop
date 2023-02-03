import React from 'react';
import { createUseStyles } from 'react-jss';
import theme from '../../common/theme';
import { useForm, FieldValues } from 'react-hook-form';
import { loginUser } from '../../api/controller/authController';
import { setAuthToken } from '../../helpers/authHelpers';
import { useNavigate } from 'react-router-dom';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    height: '40vh',
    maxHeight: '100%',
    margin: '9.5vh',
    maxWidth: '100%',
  },

  inputBox: {
    position: 'relative',
    width: '35vw',
    height: '3vh',
    margin: [5, 0],
    maxWidth: '100%',
    color: theme.colors.black,
    padding: theme.spacing.s,
    background: theme.colors.lightLightPink,
    border: [1, 'dashed', theme.colors.pink],
    fontSize: theme.typography.h4,
    fontFamily: theme.font.fontFamily,
  },

  link: {
    display: 'block',
    margin: [9, 0],
    color: theme.colors.pink,
    fontSize: theme.typography.h4,
    textDecoration: 'underline',
    cursor: 'pointer',
  },

  containerTitle: {
    fontSize: theme.typography.h2,
    color: theme.colors.black,
  },

  containerText: {
    fontSize: theme.typography.h4,
    color: theme.colors.black,
  },

  button: {
    backgroundColor: theme.colors.lightGray,
    cursor: 'pointer',
    color: theme.colors.black,
    border: 'none',
    width: '36.5vw',
    maxWidth: '100%',
    margin: [5, 0],
    fontSize: theme.typography.h4,
    fontFamily: theme.font.fontFamily,
    padding: '0.5vh',
    transition: 'background .2s ease-in-out',
    '&:hover': {
      background: theme.colors.gray,
    },
  },
});

const LoginBox: React.FC = () => {
  const classes = useStyles();
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (formValues: FieldValues) => {
    const loggedInUser = {
      email: formValues.email,
      password: formValues.password,
    };

    const response = await loginUser(loggedInUser);

    if (response.isSuccess === true) {
      const { accessToken } = response.body;
      setAuthToken(accessToken);
      navigate('/dashboard');
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.containerTitle}>Logi sisse:</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="E-posti aadress"
          className={classes.inputBox}
          {...register('email')}
        />
        <br />
        <input
          type="password"
          placeholder="Salasõna"
          className={classes.inputBox}
          {...register('password')}
        />
        <a
          className={classes.link}
          onClick={() => alert('aga.. Proovi veel, äkki tuleb ikka meelde?')}
        >
          Unustasid salasõna?
        </a>
        <a href="/dashboard">
          <button className={classes.button}>Logi sisse</button>
        </a>
      </form>

      <div className={classes.containerText}>
        Pole kontot?{' '}
        <a href="/register" className={classes.link}>
          Registreeru
        </a>
      </div>
    </div>
  );
};

export default LoginBox;
