import React from "react";
import "./App.css";
//import Componets
import {
  Header,
  History,
  IncomeAndExpense,
  AddTransaction,
  Balance,
} from "./Components/index";

// import Global Provider
import {UseContext} from './Context/UseContext'


function App() {
  return (
    <div>
      <Header />
      <UseContext>
      <div>
        <Balance />
        <IncomeAndExpense />
        <History />
        <AddTransaction />
      </div>
      </UseContext>
    </div>
  );
}

export default App;
