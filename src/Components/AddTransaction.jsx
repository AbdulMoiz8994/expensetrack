import React, { useContext, useState } from 'react'
import {CreateContext} from '../Context/CreateContext'

export const AddTransaction = () => {


const [amount,setAmount]=useState(0);
const [desc,setDesc]=useState("")

// const {AddTransaction}=useContext(CreateContext);
// console.log(AddTransaction);

const ADDValue=useContext(CreateContext)

const onSubmitFunc=(e) =>{
e.preventDefault()
// console.log(e.target); From e we give mutiple things from target we get the whole form
console.log(desc, amount);
const ADDInpt={
    id: new Date().getTime(),
    desc,
    amount: Number(amount)
}
// console.log(ADDInpt.id); //it will generate for us a unique numbers from when time was started till hours 
ADDValue.AddTransaction(ADDInpt)
setDesc('');
setAmount(0)
}



    return (
     <div>
<form onSubmit={onSubmitFunc}>
    <label>
    Add Transaction
</label>
<input type="text" value={desc} name="addTranscation" required onChange={(e) => setDesc(e.target.value)}/>

<label>
    Amount(Income,Expense)
</label>
<input type="number" value={amount} name="amount" required onChange={e => setAmount(e.target.value)}/>

<input type="submit" value="Submit"/>
</form>
        </div>
    )
}
