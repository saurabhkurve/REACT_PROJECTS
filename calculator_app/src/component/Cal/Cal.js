import React, { useState } from "react";
import CalWrapper from "../CalWrapper/CalWrapper";
import "./Cal.css"

const Cal = () => {
  const [inputVal1, setInputVal1] = useState(0);
  const [operationValue, setOperationValue] = useState(0); //store previous value in state
  const [currentOperation, setCurrentOperation] = useState("");

  const allBtArr = [
    {
      value: "AC",
      btFun: () => {
       setInputVal1(0)
       setOperationValue("")
       setCurrentOperation("")
      },
    },
    {
      value: "DEL",
      btFun: () => {
        setInputVal1(
          (prev) => {
            const newVal = parseInt(prev.toString().slice(0,-1))

            return isNaN(newVal) ? 0 : newVal;
          }) 
      },
    },
    {
      value: "x2",
      btFun: () => {
        setInputVal1(
          (prev) => prev*prev) // Add 1 to the input value
      },
    },
    
    {
      value: "/",
      btFun: () => {
        setCurrentOperation("/");
        setOperationValue(inputVal1);
        setInputVal1(0);
      },
    },
    {
      value: 1,
      btFun: () => {
        setInputVal1(
          (prev) => parseFloat(prev.toString() + 1) // Add 1 to the input value
        );
      },
    },
    {
      value: 2,
      btFun: () => {
        setInputVal1(
          (prev) => parseFloat(prev.toString() + 2) // Add 2 to the input value
        );
      },
    },
    {
      value: 3,
      btFun: () => {
        setInputVal1(
          (prev) => parseFloat(prev.toString() + 3) // Add 3 to the input value
        );
      },
    },
    {
      value: "*",
      btFun: () => {
        setCurrentOperation("*");
        setOperationValue(inputVal1);
        setInputVal1(0);
      },
    },
    
    {
      value: 4,
      btFun: () => {
        setInputVal1(
          (prev) => parseFloat(prev.toString() + 4) // Add 4 to the input value
        );
      },
    },
    {
      value: 5,
      btFun: () => {
        setInputVal1(
          (prev) => parseFloat(prev.toString() + 5) // Add 4 to the input value
        );
      },
    },
    {
      value: 6,
      btFun: () => {
        setInputVal1(
          (prev) => parseFloat(prev.toString() + 6) // Add 4 to the input value
        );
      },
    },
    {
      value: "-",
      btFun: () => {
        setCurrentOperation("-");
        setOperationValue(inputVal1);
        setInputVal1(0);
      },
    },
    {
      value: 7,
      btFun: () => {
        setInputVal1(
          (prev) => parseFloat(prev.toString() + 7) // Add 4 to the input value
        );
      },
    },
   
   
    {
      value: 8,
      btFun: () => {
        setInputVal1(
          (prev) => parseFloat(prev.toString() + 8) // Add 4 to the input value
        );
      },
    },
    
    {
      value: 9,
      btFun: () => {
        setInputVal1(
          (prev) => parseFloat(prev.toString() + 9) // Add 4 to the input value
        );
      },
    },
    {
      value: "+",
      btFun: () => {
        setCurrentOperation("+");
        setOperationValue(inputVal1);
        setInputVal1(0);
      },
    },
    {
      value: 0,
      btFun: () => {
        setInputVal1(
          (prev) => parseFloat(prev.toString() + 0) // Add 0 to the input value
        );
      },
    },
    
    
    {
      value: "%",
      btFun: () => {
        setCurrentOperation("%");
        setOperationValue(inputVal1);
        setInputVal1(0);
      },
    },
   
    {
      value: ".",
      btFun: () => {
        if (!String(inputVal1).includes(".")) {
          setInputVal1(prev => prev === "0" ? "0." : parseFloat(String(prev)) + ".");
        } else {
          console.error("Invalid input: More than one '.'");
        }
      },
    },
    {
      value: "=",
      btFun: () => {
        if (currentOperation === "+") {
          setInputVal1((prev) => {
            return parseFloat(prev) + parseFloat(operationValue);
          });
        } else if (currentOperation === "-") {
          setInputVal1((prev) => {
            return parseFloat(operationValue) - parseFloat(prev);
          });
        } else if (currentOperation === "*") {
          setInputVal1((prev) => {
            return parseFloat(prev) * parseFloat(operationValue);
          });
        } else if (currentOperation === "/") {
          setInputVal1((prev) => {
            return parseFloat(operationValue) / parseFloat(prev);
          });
        } else if(currentOperation === "%"){
          setInputVal1((prev)=>{
            return parseFloat(prev) * operationValue / 100;
          })
        }
          else {
          setInputVal1((prev) => {
            return prev;
          });
        }
      },
    },
  ];

  // const operatonArr = [
  //   {
  //     value: "+",
  //     btFun: () => {
  //       setCurrentOperation("+");
  //       setOperationValue(inputVal1);
  //       setInputVal1(0);
  //     },
  //   },
  //   {
  //     value: "-",
  //     btFun: () => {
  //       setCurrentOperation("-");
  //       setOperationValue(inputVal1);
  //       setInputVal1(0);
  //     },
  //   },
  //   {
  //     value: "*",
  //     btFun: () => {
  //       setCurrentOperation("*");
  //       setOperationValue(inputVal1);
  //       setInputVal1(0);
  //     },
  //   },
  //   {
  //     value: "/",
  //     btFun: () => {
  //       setCurrentOperation("/");
  //       setOperationValue(inputVal1);
  //       setInputVal1(0);
  //     },
  //   },
  //   {
  //     value: ".",
  //     btFun: () => {
  //       setCurrentOperation(".");
  //       setOperationValue(inputVal1);
  //       setInputVal1(0);
  //     },
  //   },
  //   {
  //     value: "=",
  //     btFun: () => {
  //       if (currentOperation === "+") {
  //         setInputVal1((prev) => {
  //           return prev + operationValue;
  //         });
  //       } else if (currentOperation === "-") {
  //         setInputVal1((prev) => {
  //           return operationValue - prev;
  //         });
  //       } else if (currentOperation === "*") {
  //         setInputVal1((prev) => {
  //           return prev * operationValue;
  //         });
  //       } else if (currentOperation === "/") {
  //         setInputVal1((prev) => {
  //           return operationValue / prev;
  //         });
  //       } else {
  //         setInputVal1((prev) => {
  //           return prev;
  //         });
  //       }
  //     },
  //   },
  // ];

  

  return (
    <div className="main-container">
      <h1>Calculator</h1>
      <p className="prev-operation">
        {operationValue} {currentOperation} 
      </p>
      
      <p className="current-operation">{inputVal1}</p>
      <CalWrapper allBtArr={allBtArr}  />
      {/* <CalWrapper allBtArr={allBtArr} operatonArr={operatonArr} /> */}
    </div>
  );
};

export default Cal;
