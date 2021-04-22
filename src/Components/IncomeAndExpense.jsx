import React, { useContext } from 'react'

// import context which we createContext 
import {CreateContext} from '../Context/CreateContext'


export const IncomeAndExpense = () => {
    // here we only get values (amount)
const {transcactions}=useContext(CreateContext);
console.log(transcactions);

const amounts=transcactions.map((amount) => amount.amount)
console.log(amounts);
const income=amounts.filter((amounts) => amounts > 0).reduce(((acc,value) => acc +=value),0).toFixed(2)
// The reducer by default value id 0 and it will assign to acc
console.log(income);

const expense=amounts.filter((amounts)=> amounts < 0).reduce(((acc,value) => acc=acc+value),0).toFixed(2)
// The reducer by default value id 0 and it will assign to acc

console.log(expense); 

    return (
        <div>
<h2>Income</h2>
<h3>{income}</h3>

<h2>Expense</h2>
<h3>{expense}</h3>
        </div>
    )
}
