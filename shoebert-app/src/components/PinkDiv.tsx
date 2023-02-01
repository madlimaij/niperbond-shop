import React from 'react';
import { createUseStyles } from 'react-jss';

type PinkDivProps = {
  cname?: any;
  adtext?: string;
};

const useStyles = createUseStyles({
  pinkDiv: {
    height: '8vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const PinkDiv: React.FC<PinkDivProps> = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div className={`${props.cname} ${classes.pinkDiv}`}>{props.adtext}</div>
    </div>
  );
};

export default PinkDiv;