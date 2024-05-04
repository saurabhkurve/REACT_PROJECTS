import React from "react";
import "./Button.css";

const Button = (props) => {

    const {btFun, btName} = props;

  return (
    <div>
      <button className="bt-cal" onClick={btFun}>{btName}</button>
    </div>
  );
};

export default Button;
