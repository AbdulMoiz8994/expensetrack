import React, { useContext } from 'react'

// import context which we create and make as provider  and also ad prop value in contextapi file
import {CreateContext} from '../Context/CreateContext'

export const History = () => {
const {transcactions,deletetransaction}=useContext(CreateContext)    
console.log(transcactions,deletetransaction);
    return (
        <div>
          <h2>History</h2> 
        {transcactions.map((transactionObj,id) =>{

          return(
            <div key={id}>
              <ul>
              <li>{transactionObj.desc} <span>{transactionObj.amount} <button onClick={() => deletetransaction(transactionObj.id)}>X</button></span></li>
              </ul>
            </div>
          )
        })}
          
        </div>
    )
}
