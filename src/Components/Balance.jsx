import React, { useContext } from 'react'

// import createContext which we make and also give property of value and give the objetc of transactions an props.children means all comp has come under the creat context
import {CreateContext} from '../Context/CreateContext'


export const Balance = () => {

const {transcactions}=useContext(CreateContext);

const data=transcactions.map((amountOnly) => amountOnly.amount)
console.log(data);

const balance=data.reduce(((acc,value) => acc +=value),0).toFixed(2)
console.log(balance);
// we get the sum of our value via rducer (acc + value)(acc +(-value)) it works like this
//we used  reduce to add array's values which accept two parameter

    return (
        <div>
<h2 className="balance">Your Balance</h2>
   <h3 className="balance-amount">${balance}</h3>
        </div>
    )
}
