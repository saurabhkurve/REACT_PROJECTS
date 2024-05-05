import React from "react";
import "./App.css";
import UserMgmt from "./component/UserMgmt/UserMgmt";

function App() {
  return (
    <div className="App">
      <UserMgmt isLogging={false}/>
    </div>
  );
}

export default App;
