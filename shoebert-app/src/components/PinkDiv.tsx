import React from "react";

type PinkDivProps = {
  cname?: any;
  adtext?: string;
};

const PinkDiv: React.FC<PinkDivProps> = (props) => {
  return (
    <div>
      <div className={props.cname}>{props.adtext}</div>
    </div>
  );
};

export default PinkDiv;
