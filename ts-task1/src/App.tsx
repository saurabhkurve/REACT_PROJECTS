import React from 'react';
import './App.css';
import Add from './components/Addd';
import Sub from './components/Subb';
import Mul from './components/Mull';
import Div from './components/Divv';

import PassingString from './components/PassingString';


function App() {
  return (
    <div className="">
     <Add a={2} b={8}/>
     <Sub c={100} d={25}/>
     <Mul e={8} f={4}/>
     <Div g={200} h={5} />
     <PassingString  name="Saurabh" age={12}/>
    </div>
  );
}

export default App;
