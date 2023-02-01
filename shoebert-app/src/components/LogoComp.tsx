import React from "react";
import { createUseStyles } from "react-jss";
import theme from "../theme";

const useStyles = createUseStyles({
  logo: {
    position: "absolute",
    zIndex: 100,
    top: 10,
    left: 15,
    "@media (max-width: 900px)": {
      display: "none",
    },
  },
});

type LogoCompProps = {
  logosource: string;
};

const LogoComp: React.FC<LogoCompProps> = (props) => {
  const classes = useStyles();
  return (
    <div>
      <img
        src={props.logosource}
        alt="Niperbond"
        className={classes.logo}
        //z-index toob kõige ette
      />
    </div>
  );
};

export default LogoComp;
