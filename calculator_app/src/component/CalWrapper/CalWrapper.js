import React from "react";
import Button from "../../common/Button/Button";
import "./CalWrapper.css"

const CalWrapper = (props) => {
  // Create buttons for all values in allBtArr
  const allButton = props.allBtArr.map((btObj) => {
    return <Button key={btObj.value} btName={btObj.value} btFun={btObj.btFun} />; // Render Button component
  });

  // Create buttons for all values in operatonArr
  // const allOperationBtn = props.operatonArr.map((btObj) => {
  //   return <Button key={btObj.value} btName={btObj.value} btFun={btObj.btFun} />;
  // });

  // const allBtns = [...allButton, ...allOperationBtn]

  // Render the main calculator wrapper
  return (
    <div className="main-cal">
      <div className="bt-name bt-group">{allButton}</div> 
      {/* <div className="opration-bt bt-group">{allOperationBtn}</div>  */}
      {/* {allBtns} */}
    </div>
  );
};

export default CalWrapper;
