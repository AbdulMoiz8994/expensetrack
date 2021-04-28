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
     <div className="main-Transactions">
<form onSubmit={onSubmitFunc} className="form-control">
    <label className="AddTransaction">
    Add Transaction
</label>
<input className="addtext" type="text" value={desc} name="addTranscation" required onChange={(e) => setDesc(e.target.value)}/>

<label className="AddTransaction">
    Amount
    <p className="icomeandexpense">(Income,Expense)</p>
</label>
<input className="addtext" type="number" value={amount} name="amount" required onChange={e => setAmount(e.target.value)}/>

<input className="button" type="submit" value="Add Transaction"/>
</form>
        </div>
    )
}
