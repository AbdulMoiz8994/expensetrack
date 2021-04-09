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

function App() {
  return (
    <div>
      <Header />
      <div>
        <Balance />
        <IncomeAndExpense />
        <History />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
