import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  logo: {
    position: "absolute",
    zIndex: 100,
    top: 10,
    left: 15,
    "@media (max-width: 1000px)": {
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
      <a href={"/"}>
        <img
          src={props.logosource}
          alt="Niperbond"
          className={classes.logo}
          //z-index toob kõige ette
        />
      </a>
    </div>
  );
};

export default LogoComp;
